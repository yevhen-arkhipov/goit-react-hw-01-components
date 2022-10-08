import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  NameStats,
  TextStats,
} from './ProfileStats.styled';

export const ProfileStats = ({ stats }) => {
  return (
    <>
      <StatsList>
        <StatsItem>
          <NameStats>Followers</NameStats>
          <TextStats>{stats.followers}</TextStats>
        </StatsItem>
        <StatsItem>
          <NameStats>Views</NameStats>
          <TextStats>{stats.views}</TextStats>
        </StatsItem>
        <StatsItem>
          <NameStats>Likes</NameStats>
          <TextStats>{stats.likes}</TextStats>
        </StatsItem>
      </StatsList>
    </>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
