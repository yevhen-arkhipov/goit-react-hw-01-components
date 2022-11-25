import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${p => p.theme.space[6]}px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.outline};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondBackGround};
  border-radius: 5px;
`;

export const Photo = styled.img`
  width: 150px;
  border: 1px solid ${p => p.theme.colors.photoBorderColor};
  border-radius: 50%;
`;

export const TextName = styled.h3`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const DiscriptionText = styled.p`
  color: ${p => p.theme.colors.secondText};
  font-size: ${p => p.theme.fontSizes.s}px;
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
