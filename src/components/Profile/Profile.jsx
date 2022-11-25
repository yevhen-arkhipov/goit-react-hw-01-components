import PropTypes from 'prop-types';

import {
  Section,
  ProfileWrapper,
  Card,
  Photo,
  TextName,
  DiscriptionText,
  StatsList,
  StatsItem,
  NameStats,
  TextStats,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Section>
      <ProfileWrapper>
        <Card>
          <Photo src={avatar} alt="User avatar" />
          <TextName>{username}</TextName>
          <DiscriptionText>@{tag}</DiscriptionText>
          <DiscriptionText>{location}</DiscriptionText>
        </Card>
        <StatsList>
          <StatsItem>
            <NameStats>Followers</NameStats>
            <TextStats>{followers}</TextStats>
          </StatsItem>
          <StatsItem>
            <NameStats>Views</NameStats>
            <TextStats>{views}</TextStats>
          </StatsItem>
          <StatsItem>
            <NameStats>Likes</NameStats>
            <TextStats>{likes}</TextStats>
          </StatsItem>
        </StatsList>
      </ProfileWrapper>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
