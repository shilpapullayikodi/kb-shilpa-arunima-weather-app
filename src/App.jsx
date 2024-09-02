import { useState } from "react";
import "./App.css";
import Form from ".components/Form/Form.jsx";
import ListEntries from "./components/ListEntries/ListEntries.jsx";
import useLocalStorageState from "use";

function App() {
  const [activities, setActivities] = useLocalStorageState("activites", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState(null);

  function handleAddNewActivity(newActivity) {
    setActivities((prevActivity) => [...prevActivity, newActivity]);
  }

  return <></>;
}

export default App;
