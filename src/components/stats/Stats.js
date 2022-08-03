import React from "react";
import useDataStore from "../hooks/useDataStore";
import Login from "../login/Login.js";
import StatsDisplay from "../stats-display/StatsDisplay"
import '../shared-styles.css';
import "./Stats.css"

const Stats = () => {

  const userName = useDataStore((state) => state.userName)

  return (
    <div className="stats">
      {userName ? <StatsDisplay /> : <Login /> }
    </div>
  )
};

export default Stats;