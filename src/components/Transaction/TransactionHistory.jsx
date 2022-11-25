import PropTypes from 'prop-types';

// import TransactionBoard from './TransactionBoard';

import {
  Section,
  TransactionTable,
  TransactionTableHeader,
  TransactionTableTitle,
  TableTitleText,
  TransactionTableBody,
  TransactionСolumn,
  TransactionСell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <TransactionTable>
        <TransactionTableHeader>
          <TransactionTableTitle>
            <TableTitleText>Type</TableTitleText>
            <TableTitleText>Amount</TableTitleText>
            <TableTitleText>Currency</TableTitleText>
          </TransactionTableTitle>
        </TransactionTableHeader>
        <TransactionTableBody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionСolumn key={id}>
              <TransactionСell>{type}</TransactionСell>
              <TransactionСell>{amount}</TransactionСell>
              <TransactionСell>{currency}</TransactionСell>
            </TransactionСolumn>
          ))}
        </TransactionTableBody>
      </TransactionTable>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
