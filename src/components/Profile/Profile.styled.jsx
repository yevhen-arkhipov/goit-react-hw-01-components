import styled from 'styled-components';

export const ProfileSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${p => p.theme.space[6]}px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;
`;

export const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 304px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondBackGround};
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
