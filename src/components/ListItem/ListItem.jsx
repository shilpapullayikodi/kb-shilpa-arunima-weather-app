import PropTypes from "prop-types";


const ListItem = ({ children }) => {
  return (<li className="list__item">{children}</li>);
};

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
