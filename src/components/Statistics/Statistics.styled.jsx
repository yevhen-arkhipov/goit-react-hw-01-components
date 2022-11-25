import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.secondBackGround};
  box-shadow: ${p => p.theme.shadows.outline};
  border-radius: 5px;
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

export const StatsName = styled.span`
  color: ${p => p.theme.colors.secondBackGround};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const StatsPerc = styled.span`
  color: ${p => p.theme.colors.secondBackGround};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
`;
