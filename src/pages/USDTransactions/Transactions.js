import React from "react";
import { Layout } from "../../components/Layout";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Icon,
  Text,
  Divider,
  ListItem,
  List,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/core";

// TODO: pull this list from somewhere
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
];

const TransactionItem = ({ details }) => (
  <AccordionItem border="none" my={10}>
    <AccordionHeader px={0}>
      <Stack width="100%">
        <Text
          fontSize="xs"
          color="primary.800"
          width="100%"
          textAlign="left"
          style={{ marginBottom: 0 }}
        >
          Transaction ID: {details.id}
        </Text>
        <Divider width="100%" borderColor="primary.800" borderBottomWidth={2} />
        <Stack isInline justifyContent="space-between" width="100%">
          <Stack>
            <Text color="primary.500" fontSize="xs" fontWeight="bold">
              AMOUNT
            </Text>
            <Text fontSize="lg" color="primary.800">
              ${details.amount}
            </Text>
          </Stack>
          <Stack>
            <Text color="primary.500" fontSize="xs" fontWeight="bold">
              CONFIRMED
            </Text>
            <Text fontSize="lg" color="primary.800">
              {details.confirmed ? (
                <Icon name="check" />
              ) : (
                <Icon name="close" />
              )}
            </Text>
          </Stack>
          <Stack>
            <Text color="primary.500" fontSize="xs" fontWeight="bold">
              DATE
            </Text>
            <Text fontSize="lg" color="primary.800">
              {details.date.toLocaleDateString()}
            </Text>
          </Stack>
          <Stack alignItems="center">
            <Text color="primary.500" fontSize="xs" fontWeight="bold">
              DETAILS
            </Text>
            <AccordionIcon color="primary.800" />
          </Stack>
        </Stack>
      </Stack>
    </AccordionHeader>
    <AccordionPanel pb={4}>
      {/* everything in the details object that hasnt already been shown is shown in an unordered list */}
      <List styleType="disc" width="100%" textAlign="left">
        {Object.entries(details)
          .filter(
            ([key]) => !["amount", "confirmed", "date", "id"].includes(key)
          )
          .map(([key, value]) => (
            <ListItem key={key}>
              {key}: {value}
            </ListItem>
          ))}
      </List>
    </AccordionPanel>
  </AccordionItem>
);

export const Transactions = () => {
  return (
    <Layout title="USD TRANSACTIONS">
      <Stack backgroundColor="white" flexGrow={1} px={10} pb={5}>
        <Accordion allowMultiple allowToggle>
          {transactions.map((details) => (
            <TransactionItem details={details} key={details.id} />
          ))}
        </Accordion>
      </Stack>
    </Layout>
  );
};
