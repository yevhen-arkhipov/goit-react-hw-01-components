import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  height: auto;
  text-align: center;
  box-shadow: ${p => p.theme.shadows.outline};
`;

export const TransactionTableHeader = styled.thead`
  background-color: ${p => p.theme.colors.titleBackGround};
`;

export const TransactionTableTitle = styled.tr`
  // *
`;

export const TableTitleText = styled.th`
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${p => p.theme.colors.secondBackGround};
`;

export const TransactionTableBody = styled.tbody`
  // *
`;

export const TransactionСolumn = styled.tr`
  background-color: ${p => p.theme.colors.secondBackGround};
  &:nth-child(2n) {
    background-color: ${p => p.theme.colors.trSecondBackGround};
  }
`;
