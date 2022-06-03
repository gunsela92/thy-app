import React, {useEffect} from "react";
import Routing from "./Routes";
import {getStorage, setStorage} from "./Utils/storageUtils";
import flights from "./flights.json";

function App() {

  const checkStorage = () => {
    const storageData = getStorage("flights");
    if (!storageData) {
      setStorage("flights", flights);
    }
  }

  useEffect(() => {
    checkStorage()
  }, []);

  return (
    <Routing />
  );
}

export default App;
