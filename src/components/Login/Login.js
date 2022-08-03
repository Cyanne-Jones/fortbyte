import React, { useState } from "react";
import useDataStore from "../hooks/useDataStore";
import '../shared-styles.css';
import "./Login.css"

const Login = () => {
  const setUserStats = useDataStore((state) => state.setUserStats)
  const setUserName = useDataStore((state) => state.setUserName)
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("")

  const logUserIn = (event) => {
    event.preventDefault();
    setError('')
    setUserName(userInput)
    fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${userInput}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
      }
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      }
      else if (res.status === 400) {
        throw new Error("Invalid username, try again")
      }
    })
    .then(res => setUserStats(res.data.stats.all))
    .catch(errorMsg => setError(errorMsg))
  }

  const enterUsername = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="login yellow-gradient box-shadow">
      <h2 className="blue-gradient box-shadow">Enter an Epic Username</h2>
      {error ? <p>"Looks like you've entered an invalid username!"</p> : ''}
      <form>
        <input
          type="text"
          placeholder="username"
          value={userInput}
          onChange={enterUsername}></input>
          <button
            className="login-button blue-gradient box-shadow text-drop-shadow"
            onClick={logUserIn}
            >
            LEMME SEE THOSE STATS
            </button>
      </form>
    </div>
  )
};

export default Login;