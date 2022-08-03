import React, { useState, useEffect } from "react";
import useDataStore from "../hooks/useDataStore";
import "../shared-styles.css";
import "./Login.css";
import { fetchUserStats } from "../apiCalls";

const Login = () => {
  const setUserStats = useDataStore((state) => state.setUserStats);
  const setUserName = useDataStore((state) => state.setUserName);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setUserName('');
  }, []);

  const logUserIn = (event) => {
    event.preventDefault();
    setError('');
    fetchUserStats(userInput)
    .then(res => {
      setUserName(userInput)
      setUserStats(res.data.stats.all)})
    .catch(errorMsg => setError(errorMsg));
  }

  const enterUsername = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="login yellow-gradient box-shadow">
      <h2 className="epic-name blue-gradient box-shadow">Enter an Epic Username</h2>
      {error && <p className="error">"Looks like you've entered an invalid username!"</p> }
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
            LEMME SEE THOSE STATS!
            </button>
      </form>
    </div>
  )
};

export default Login;