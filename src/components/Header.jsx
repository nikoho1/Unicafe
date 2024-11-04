import Proptypes from "prop-types";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

Header.propTypes = {
  text: Proptypes.string,
};

export default Header;
