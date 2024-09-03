import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import Header from "./components/Header/Header.jsx";
import useLocalStorageState from "use-local-storage-state";
import Location from "./components/Location/Location.jsx";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });

  const [weather, setWeather] = useState(null);

  function handleAddNewActivity(newActivity) {
    let trimmedName = newActivity.name.trim();
    trimmedName = trimmedName.replace(/[^a-zA-Z0-9]/g, "");

    if(!trimmedName) {
      alert("Please provide a valid activity name without special characters!");
      return;
    }

    const duplicateActivity = activities.some(activity => activity.name.toLowerCase() === trimmedName.toLowerCase());

    if (duplicateActivity) {
      alert(`Activity ${trimmedName} already exists in Activity list`);
      return;
    }
    setActivities((prevActivity) => [...prevActivity, {...newActivity, name: trimmedName}]);
  }

  function handleDeleteActivity (id) {
    setActivities((prevActivity) => prevActivity.filter(activity => activity.id !== id));
  }

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://example-apis.vercel.app/api/weather/${location}`);

        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.log("Error. Failed!");
        }

      } catch (e) {
        console.log("Error fetching weather data: ", e);
      }
    }

    fetchWeatherData();

    const timer = setInterval(fetchWeatherData, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [location]);

  if (!weather) {
    return (
      <div className="app-loading-data">
        <strong>Loading...</strong>
      </div>
    );
  }
  const filteredActivites = activities.filter(
    activity => activity.isGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <Header/>
      <div className="app">
        <Location location={location} setLocation={setLocation}/>
        <h1 className="app-heading">
          <span style={{fontSize:"1.5rem"}}>{weather.condition}&nbsp;</span>
          <span>{weather.temperature}&nbsp;&#8451;</span>
        </h1>

        <h3>
          { activities.length > 0 ? (weather.isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: ") : `Activity List is currently empty. Please fill out the activity form below.`}
        </h3>
        <List 
          activities={filteredActivites}
          onDeleteActivity={handleDeleteActivity} />
        <Form onAddActivity={handleAddNewActivity} />
      </div>
    </>
  );
}

export default App;