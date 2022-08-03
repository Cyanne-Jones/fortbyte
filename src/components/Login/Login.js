import React, { useState } from "react";
import useDataStore from "../hooks/useDataStore";

const Login = () => {
  const setUserStats = useDataStore((state) => state.setUserStats)
  const setUserName = useDataStore((state) => state.setUserName)
  const [userInput, setUserInput] = useState("");

  const logUserIn = (event) => {
    event.preventDefault();
    setUserName(userInput)
    fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${userInput}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
    .then(res => res.json())
    .then(res => setUserStats(res))
    .catch(error => console.log(error))
  }

  const enterUsername = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="login">
      <h2>Enter an Epic Username</h2>
      <form>
        <input
          type="text"
          placeholder="username"
          value={userInput}
          onChange={enterUsername}></input>
          <button
            onClick={logUserIn}
            >
            LEMME SEE THOSE STATS
            </button>
      </form>
    </div>
  )
};

export default Login;