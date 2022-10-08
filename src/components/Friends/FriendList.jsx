import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendSection, FriendsList, FriendsItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSection>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendsItem>
        ))}
      </FriendsList>
    </FriendSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
