import styled from 'styled-components';

export const FriendSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  width: 320px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.secondBackGround};
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
