import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats';
import {
  ProfileSection,
  ProfileBox,
  PhotoBox,
  Photo,
  TextName,
  DiscriptionText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileSection>
      <ProfileBox>
        <PhotoBox>
          <Photo src={avatar} alt="User avatar" />
          <TextName>{username}</TextName>
          <DiscriptionText>@{tag}</DiscriptionText>
          <DiscriptionText>{location}</DiscriptionText>
        </PhotoBox>
        <ProfileStats stats={stats} />
      </ProfileBox>
    </ProfileSection>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
