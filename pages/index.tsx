import type { NextPage } from 'next'
import { Container, Row, Col, Card, Text, Input, Button, useInput, Table, Loading, Spacer } from '@nextui-org/react';
import { useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

enum PullVoterState {
  None,
  Pulling,
  Pulled,
}

const Home: NextPage = () => {
  const urlInput = useInput("https://snapshot.org/#/theopendao.eth/proposal/0xacbc420c3696740786c76065c51cb8bc5ed0982d2162ee3f74441c14785b91c6");
  const [voterAddresses, setVoterAddresses] = useState<string[]>([]);
  const [pullVoterState, setPullVoterState] = useState(PullVoterState.None);
  const version = `${process.env.VERSION}, ${moment().format("yyyy-MM-DD")}`;

  const proposalValidation = useMemo(() => {
    const urlPrefix = "https://snapshot.org/#/theopendao.eth/proposal/";
    const url = urlInput.value.trim();

    const result = {
      correct: true,
      id: "",
    };

    if (url === "") {
      return result;
    }

    if (!url.startsWith(urlPrefix)) {
      result.correct = false;
      return result;
    }

    const id = url.substring(urlPrefix.length);
    if (!/^0x[0-9a-zA-Z]{64}$/.test(id)) {
      result.correct = false;
      return result;
    }

    result.id = id;
    return result;
  }, [urlInput.value]);

  const pullVoters = useCallback(async (proposalId: string) => {
    setVoterAddresses([]);
    setPullVoterState(PullVoterState.Pulling);

    let page = 0;
    let batchSize = 500;

    while (true) {
      const resp = await axios.post(
        "https://hub.snapshot.org/graphql",
        {
          "operationName": "Votes",
          "query": "query Votes($id: String!, $first: Int, $skip: Int, $orderBy: String, $orderDirection: OrderDirection, $voter: String) {\n  votes(\n    first: $first\n    skip: $skip\n    where: {proposal: $id, vp_gt: 0, voter: $voter}\n    orderBy: $orderBy\n    orderDirection: $orderDirection\n  ) {\n    voter\n  }\n}",
          "variables": {
            "id": proposalId,
            "orderBy": "vp",
            "orderDirection": "desc",
            "first": batchSize,
            "skip": batchSize * page,
          },
        });

      page++;

      const voters = resp.data.data.votes.map((v: { voter: string }) => v.voter);
      if (voters.length === 0) {
        break;
      }
      setVoterAddresses(oldAddresses => [...oldAddresses, ...voters]);
    }

    setPullVoterState(PullVoterState.Pulled);
  }, [setVoterAddresses, setPullVoterState]);

  const downloadVoters = useCallback(() => {
    if (pullVoterState !== PullVoterState.Pulled) {
      return
    }

    const content = ["voter", ...voterAddresses].join("\r\n");
    const blob = new Blob([content], { type: "text/csv" })
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `voters-${proposalValidation.id}-${+new Date()}.csv`;
    link.click();
  }, [voterAddresses, pullVoterState, proposalValidation.id]);

  return (
    <Container
      css={{
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
      gap={1}
    >
      <Row align="baseline">
        <Text h1>Snapshot Voter Viewer</Text>
        <Text span css={{ paddingLeft: "1rem" }}>(Version: {version})</Text>
      </Row>
      <Row>
        <Input
          {...urlInput.bindings}
          label="URL to the proposal"
          placeholder="https://snapshot.org/#/theopendao.eth/proposal/0xexample"
          status={proposalValidation.correct ? "default" : "error"}
          color={proposalValidation.correct ? "default" : "error"}
          helperColor={proposalValidation.correct ? "default" : "error"}
          helperText={proposalValidation.correct ? "" : "Invalid proposal URL"}
          width="50%"
        />
      </Row>
      <Spacer y={1} />
      <Row>
        <Button
          onClick={() => pullVoters(proposalValidation.id)}
          clickable={!!proposalValidation.id && pullVoterState !== PullVoterState.Pulling}
        >
          {pullVoterState === PullVoterState.Pulling ? <Loading color="white" size="sm" /> : "Load Voters"}
        </Button>
        <Spacer x={1} />
        {pullVoterState === PullVoterState.Pulled &&
          <Button onClick={() => downloadVoters()}>
            Export Voters
          </Button>}
      </Row>
      <Spacer y={1} />
      {pullVoterState !== PullVoterState.None && <Row>
        <Table
          compact
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>#</Table.Column>
            <Table.Column>Voter ({voterAddresses.length})</Table.Column>
          </Table.Header>
          <Table.Body>
            {voterAddresses.map((voter, index) =>
              <Table.Row key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{voter}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Row>}
    </Container >
  );

}

export default Home
