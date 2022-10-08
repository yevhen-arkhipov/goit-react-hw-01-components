import styled from 'styled-components';

export const FriendStatus = styled.span`
  display: flex;
  width: 20px;
  margin-right: ${p => p.theme.space[3]}px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;
`;

export const FriendPhoto = styled.img`
  display: flex;
  width: 48px;
  margin-right: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backGround};
  border: 1px solid ${p => p.theme.colors.photoBorderColor};
  border-radius: 10%;
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: bold;
`;
