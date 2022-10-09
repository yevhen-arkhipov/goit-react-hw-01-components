import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, FriendsItem } from './FriendList.styled';
import { Box } from 'components/Box/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box display="flex" justifyContent="center" mt={6} as="section">
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendsItem>
        ))}
      </FriendsList>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
