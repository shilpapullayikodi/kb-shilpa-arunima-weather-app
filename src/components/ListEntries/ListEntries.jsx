import ListItem from "../ListItem/ListItem";

const ListEntries = ({ activities, onDeleteActivity }) => {
  return (
    <ul className="list__item-ul">
      {activites.map(({ id, name }) => {
        return <ListItem key={id}>{name}</ListItem>;
      })}
    </ul>
  );
};

export default ListEntries;
