import React from "react";
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
} from "@chakra-ui/core";
import PropTypes from "prop-types";

export const TransactionRowItem = ({ details }) => (
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

TransactionRowItem.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    confirmed: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
};
