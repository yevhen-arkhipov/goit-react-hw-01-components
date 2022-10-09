import PropTypes from 'prop-types';
import { TransactionBoard } from './TransactionBoard';
import {
  TransactionTable,
  TransactionTableHeader,
  TransactionTableTitle,
  TableTitleText,
  TransactionTableBody,
  TransactionСolumn,
} from './TransactionHistory.styled';
import { Box } from 'components/Box/Box';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box mt={6} mb={6} as="section">
      <TransactionTable>
        <TransactionTableHeader>
          <TransactionTableTitle>
            <TableTitleText>Type</TableTitleText>
            <TableTitleText>Amount</TableTitleText>
            <TableTitleText>Currency</TableTitleText>
          </TransactionTableTitle>
        </TransactionTableHeader>
        <TransactionTableBody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TransactionСolumn key={id}>
              <TransactionBoard
                type={type}
                amount={amount}
                currency={currency}
              />
            </TransactionСolumn>
          ))}
        </TransactionTableBody>
      </TransactionTable>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
