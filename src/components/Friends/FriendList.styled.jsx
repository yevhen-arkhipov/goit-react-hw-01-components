import styled from 'styled-components';

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
  box-shadow: ${p => p.theme.shadows.outline};
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
