import PropTypes from "prop-types";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

Button.PropTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
