import PropTypes from 'prop-types';

import {
  Section,
  StatisticsWrapper,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsName,
  StatsPerc,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatisticsWrapper>
        {title && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
          {stats.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <StatsName>{label}</StatsName>
              <StatsPerc>{percentage}%</StatsPerc>
            </StatsItem>
          ))}
        </StatsList>
      </StatisticsWrapper>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
