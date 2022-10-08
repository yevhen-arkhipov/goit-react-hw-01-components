import styled from 'styled-components';
import { getRandomHexColor } from 'components/utils/getRandomHexColor';

export const StatsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.secondBackGround};
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px, rgb(0 0 0 / 16%) 1px 4px 6px;
}
`;

export const StatsTitle = styled.h2`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xl}px;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${getRandomHexColor};
`;
