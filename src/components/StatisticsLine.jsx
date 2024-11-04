import PropTypes from "prop-types";
import Proptypes from "prop-types";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{value}</td>
      <td>{text}</td>
    </tr>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default StatisticLine;
