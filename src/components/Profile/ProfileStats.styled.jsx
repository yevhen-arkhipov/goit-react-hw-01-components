import styled from 'styled-components';

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
  background-color: ${p => p.theme.colors.backGround};
  border: 1px solid ${p => p.theme.colors.bodyColor};
  border-radius: 5px;
`;

export const NameStats = styled.p`
  color: ${p => p.theme.colors.secondText};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const TextStats = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: bold;
`;
