import React, { useState } from "react";
import useDataStore from "../hooks/useDataStore";
import "../shared-styles.css";
import "./StatsDisplay.css"

const StatsDisplay = () => {
  const userName = useDataStore((state) => state.userName);
  const setUserName = useDataStore((state) => state.setUserName);
  const userStats = useDataStore((state) => state.userStats);
  const [mode, setMode] = useState("overall");

  return (
    <div className="stats-display-component">
      <div className="stats-display yellow-gradient box-shadow">
        <h2 className="username blue-gradient box-shadow text-drop-shadow">
          {userName}
        </h2>
        <div className="button-container">
          <button 
            className={mode === "overall" ? "blue-gradient box-shadow mode-button" : "inactive-button mode-button"}
            onClick={() => setMode("overall")}
          >
            overall
          </button>
          <button 
            className={mode === "solo" ? "blue-gradient box-shadow mode-button" : "inactive-button mode-button"}
            onClick={() => setMode("solo")}
          >
            solo
          </button>
          <button 
            className={mode === "duo" ? "blue-gradient box-shadow mode-button" : "inactive-button mode-button"}
            onClick={() => setMode("duo")}
          >
            duos
          </button>
          <button 
            className={mode === "squad" ? "blue-gradient box-shadow mode-button" : "inactive-button mode-button"}
            onClick={() => setMode("squad")}
          >
            squads
          </button>
        </div>
        <div className="stats-container">
          <div className="score-and-ranking">
            <div className="score blue-gradient box-shadow">
              <h3 className="card-header">SCORE INFO</h3>
              <p 
                className="stats-text"
              >
                Score: {userStats[mode].score}</p>
              <p 
                className="stats-text"
              >
                Score Per Minute: {userStats[mode].scorePerMin}</p>
              <p 
                className="stats-text"
              >
                Score Per Match: {userStats[mode].scorePerMatch}</p>
            </div>
            <div className="ranking blue-gradient box-shadow">
              <h3 className="card-header">RANKING INFO</h3>
              <p 
                className="stats-text"
              >
                Wins: {userStats[mode].wins}</p>
              <p 
                className="stats-text"
              >
                Top 3: {userStats[mode].top3}</p>
              <p 
                className="stats-text"
              >
                Top 5: {userStats[mode].top5}</p>
              <p 
                className="stats-text"
              >
                Top 10: {userStats[mode].top10}</p>
            </div>
          </div>
            <div className="hits blue-gradient box-shadow">
              <h3 className="card-header">HITS INFO</h3>
              <p 
                className="stats-text"
              >
                Kills: {userStats[mode].kills}</p>
              <p 
                className="stats-text"
              >
                Kills Per Minute: {userStats[mode].killsPerMin}</p>
              <p 
                className="stats-text"
              >
                Kills Per Match: {userStats[mode].killsPerMatch}</p>
              <p 
                className="stats-text"
              >
                Deaths: {userStats[mode].deaths}</p>
              <p 
                className="stats-text"
              >
                Kills: Deaths ratio: {userStats[mode].kd}</p>
            </div>
            <div className="misc blue-gradient box-shadow">
              <h3 className="card-header">MISC INFO</h3>
              <p 
                className="stats-text"
              >
                Matches: {userStats[mode].matches}</p>
              <p 
                className="stats-text"
              >
                Win Rate: {userStats[mode].winRate}</p>
              <p 
                className="stats-text"
              >
                Minutes Played: {userStats[mode].minutesPlayed}</p>
              <p 
                className="stats-text"
              >
                Players Outlived: {userStats[mode].playersOutlived}</p>
            </div>
        </div>
      </div>
      <button 
        className="try-again-button blue-gradient box-shadow" 
        onClick={() => setUserName("")}
      >
        Try with another username!
      </button>
    </div>
  );
};

export default StatsDisplay;