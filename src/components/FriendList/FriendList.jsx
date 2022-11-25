import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import { Section, FriendsList, FriendsItem } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Section>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendsItem>
        ))}
      </FriendsList>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
