import ListItem from "../ListItem/ListItem";
import PropTypes from "prop-types";
import "../ListItem/ListItem.css"

const List = ({ activities, onDeleteActivity }) => {
  
  return (
    <ul className="list__item-ul">
      {activities.map(({ id, name }) => {
        return (
          <ListItem key={id}>
            {name}
            <button className="delete-button" onClick={ () => onDeleteActivity(id)}>
              {" "}
              &#x2717;
            </button>
          </ListItem>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  activities: PropTypes.array,
  onDeleteActivity: PropTypes.func
}

export default List;
