import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'; 


const Header = () => {
    return (
        <header className="App-header">
          <h1>Weather &nbsp; <FontAwesomeIcon icon={faCloudSun} beatFade /> </h1>
          <h1>& Activities 🤸🏼 App</h1>
          <p>Get real-time weather information for your location/location of choice.</p>
        </header>
    );
};

export default Header;