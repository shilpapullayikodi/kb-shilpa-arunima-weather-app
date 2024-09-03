import PropTypes from "prop-types";
import "./Location.css";

const Location = ({ location, setLocation }) => {
    const locationIds = [
        {
            id: 1,
            name: "Europe"
        },
        {
            id: 2,
            name: "Arctic"
        },
        {
            id: 3,
            name: "Sahara"
        },
        {
            id: 4,
            name: "Rainforest",
        },
    ];

    const handleLocationChange = (e) => {
        setLocation(e.target.textContent.toLowerCase());
    }

    return (
        <ul className="list--locations">
            {locationIds.map(({ id, name }) => (
                <li key={id} onClick={handleLocationChange} className={`location ${location === name.toLowerCase() ? "active-location" : ""}`} >
                    <p>{name}</p>
                </li>
                ))}
        </ul>
    );
}

Location.propTypes = {
    location: PropTypes.string,
    setLocation: PropTypes.func
}

export default Location;