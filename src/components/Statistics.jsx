import PropTypes from "prop-types";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({
  good,
  neutral,
  bad,
  allFeedback,
  average,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="allFeedback" value={allFeedback} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine
          text="positivePercentage"
          value={positivePercentage + "%"}
        />
      </tbody>
    </table>
  );
};

Statistics.PropTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  allFeedback: PropTypes.number,
  average: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
