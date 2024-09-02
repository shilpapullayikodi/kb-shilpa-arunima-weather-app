import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activites", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState(null);

  function handleAddNewActivity(newActivity) {
    setActivities((prevActivity) => [...prevActivity, newActivity]);
  }

  function handleDeleteActivity (id) {
    setActivities((prevActivity) => prevActivity.filter(activity => activity.id !== id));
  }



  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/weather");

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
  }, []);

  if (!weather) {
    return (
      <div className="app-loading-data">
        <strong>Loading...</strong>
      </div>
    );
  }
  const isGoodWeather = true;
  const filteredActivites = activities.filter(
    activity => activity.isGoodWeather === isGoodWeather
  );

  return (
    <>
      <div className="app">
        <h1 className="app-heading">
          <span style={{fontSize:"1.5rem"}}>{weather.condition}</span>
          <span>{weather.temperature}&nbsp;&#8451;</span>
        </h1>

        <h3>
          {weather.isGoodWeather ? "The weather is awesome! Go outside and: " : "Bad weather outside! Here's what you can do now: "}
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