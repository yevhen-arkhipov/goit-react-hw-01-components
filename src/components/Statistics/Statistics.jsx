import PropTypes from 'prop-types';
import { StatisticsStats } from './StatisticsStats';
import {
  StatsSection,
  StatsBox,
  StatsTitle,
  StatsList,
  StatsItem,
} from './Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <StatsSection>
      <StatsBox>
        {title && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
          {statistics.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <StatisticsStats label={label} percentage={percentage} />
            </StatsItem>
          ))}
        </StatsList>
      </StatsBox>
    </StatsSection>
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
