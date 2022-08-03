import React from "react";
import useDataStore from "../hooks/useDataStore";
import Login from "../login/Login.js";

const Stats = () => {

  const userName = useDataStore((state) => state.userName)

  return (
    <div>
      <h1>STATS</h1>
      {userName ? <h1>Stataroos</h1> : <Login /> }
    </div>
  )
};

export default Stats;