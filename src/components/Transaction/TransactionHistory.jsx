import PropTypes from 'prop-types';
import { TransactionBoard } from './TransactionBoard';
import {
  TransactionSection,
  TransactionTable,
  TransactionTableHeader,
  TransactionTableTitle,
  TableTitleText,
  TransactionTableBody,
  TransactionСolumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionSection>
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
    </TransactionSection>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
