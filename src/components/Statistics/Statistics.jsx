import PropTypes from 'prop-types';
import { StatisticsStats } from './StatisticsStats';
import { StatsTitle, StatsList, StatsItem } from './Statistics.styled';
import { Box } from 'components/Box/Box';

export const Statistics = ({ title, statistics }) => {
  return (
    <Box display="flex" justifyContent="center" mt={6} as="section">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="secondBackGround"
        boxShadow="outline"
        borderRadius="5px"
      >
        {title && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
          {statistics.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <StatisticsStats label={label} percentage={percentage} />
            </StatsItem>
          ))}
        </StatsList>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
