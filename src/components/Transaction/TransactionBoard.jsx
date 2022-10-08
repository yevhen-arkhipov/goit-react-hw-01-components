import PropTypes from 'prop-types';
import { TransactionСell } from './TransactionBoard.styled';

export const TransactionBoard = ({ type, amount, currency }) => {
  return (
    <>
      <TransactionСell>{type}</TransactionСell>
      <TransactionСell>{amount}</TransactionСell>
      <TransactionСell>{currency}</TransactionСell>
    </>
  );
};

TransactionBoard.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
