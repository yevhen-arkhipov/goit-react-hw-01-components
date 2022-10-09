import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats';
import { Photo, TextName, DiscriptionText } from './Profile.styled';
import { Box } from 'components/Box/Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box display="flex" justifyContent="center" pt={6} as="section">
      <Box
        display="flex"
        flexDirection="column"
        boxShadow="outline"
        borderRadius="5px"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="304px"
          pt={5}
          pb={5}
          bg="secondBackGround"
          borderRadius="5px"
        >
          <Photo src={avatar} alt="User avatar" />
          <TextName>{username}</TextName>
          <DiscriptionText>@{tag}</DiscriptionText>
          <DiscriptionText>{location}</DiscriptionText>
        </Box>
        <ProfileStats stats={stats} />
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
