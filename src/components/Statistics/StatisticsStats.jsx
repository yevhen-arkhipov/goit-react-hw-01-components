import PropTypes from 'prop-types';
import { StatsName, StatsPerc } from './StatisticsStats.styled';

export const StatisticsStats = ({ label, percentage }) => {
  return (
    <>
      <StatsName>{label}</StatsName>
      <StatsPerc>{percentage}%</StatsPerc>
    </>
  );
};

StatisticsStats.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
