import PropTypes from 'prop-types';
import { FriendStatus, FriendPhoto, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendPhoto src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
