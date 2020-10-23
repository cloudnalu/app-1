import React from "react";
import { Layout } from "../../components/Layout";
import { Accordion, Stack } from "@chakra-ui/core";
import { TransactionRowItem } from "../../components/TransactionRowItem";

/*
TODO: pull this list from somewhere 
(id, amount, confirmed, and date are required at the moment, 
rename these values in ../../components/TransactionRowItem if needed)
*/
const transactions = [
  {
    id: "adsf345asdfasdf",
    amount: "20.20",
    confirmed: true,
    date: new Date(),
    account: "12",
  },
  {
    id: "lkjhasdoisdf45",
    amount: "15.20",
    confirmed: false,
    date: new Date(),
    time: "11:15pm",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
  {
    id: "978sdfg967asdf",
    amount: "2000.20",
    confirmed: true,
    date: new Date(),
    otherInfo: "string",
  },
];

export const Transactions = () => {
  return (
    <Layout title="USD TRANSACTIONS">
      <Stack backgroundColor="white" flexGrow={1} px={10} pb={5}>
        <Accordion allowMultiple allowToggle>
          {transactions.map((details) => (
            <TransactionRowItem details={details} key={details.id} />
          ))}
        </Accordion>
      </Stack>
    </Layout>
  );
};
