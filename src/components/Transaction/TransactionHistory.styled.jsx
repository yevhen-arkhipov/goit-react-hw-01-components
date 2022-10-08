import styled from 'styled-components';

export const TransactionSection = styled.section`
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const TransactionTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  height: auto;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
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
