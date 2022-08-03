import React from "react";
import useDataStore from "../hooks/useDataStore";
import '../shared-styles.css';

const StatsDisplay = () => {

  const setUserName = useDataStore((state) => state.setUserName)


  return (
    <div className="stats-display">
      <h2>stataroos baby!</h2>
      <button onClick={() => setUserName("")}>Try with another username!</button>
    </div>
  )
};

export default StatsDisplay;