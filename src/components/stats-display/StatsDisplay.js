import React, { useState } from "react";
import useDataStore from "../hooks/useDataStore";
import '../shared-styles.css';
import "./StatsDisplay.css"

const StatsDisplay = () => {
  const userName = useDataStore((state) => state.userName)
  const setUserName = useDataStore((state) => state.setUserName)
  const userStats = useDataStore((state) => state.userStats);
  const [mode, setMode] = useState("overall")

  console.log(userStats)


  return (
    <div className="stats-display yellow-gradient box-shadow">
      <h2 className="blue-gradient box-shadow text-drop-shadow">{userName}</h2>
      <div className="button-container">
        <button 
          className={mode === "overall" ? "blue-gradient box-shadow" : "inactive-button"}
          onClick={() => setMode("overall")}
        >
          overall
        </button>
        <button 
          className={mode === "solo" ? "blue-gradient box-shadow" : "inactive-button"}
          onClick={() => setMode("solo")}
        >
          solo
        </button>
        <button 
          className={mode === "duo" ? "blue-gradient box-shadow" : "inactive-button"}
          onClick={() => setMode("duo")}
        >
          duos
        </button>
        <button 
          className={mode === "squad" ? "blue-gradient box-shadow" : "inactive-button"}
          onClick={() => setMode("squad")}
        >
          squads
        </button>
      </div>
      <div className="stats-container">
        <div className="score-and-ranking">
          <div className="score blue-gradient box-shadow">
            <h3>SCORE INFO</h3>
            <p>Score: {userStats[mode].score}</p>
            <p>Score Per Minute: {userStats[mode].scorePerMin}</p>
            <p>Score Per Match: {userStats[mode].scorePerMatch}</p>
          </div>
          <div className="ranking blue-gradient box-shadow">
            <h3>RANKING INFO</h3>
            <p>Wins: {userStats[mode].wins}</p>
            <p>Top 3: {userStats[mode].top3}</p>
            <p>Top 5: {userStats[mode].top5}</p>
            <p>Top 10: {userStats[mode].top10}</p>
          </div>
        </div>
        <div className="hits blue-gradient box-shadow">
          <h3>HITS INFO</h3>
          <p>Kills: {userStats[mode].kills}</p>
          <p>Kills Per Minute: {userStats[mode].killsPerMin}</p>
          <p>Kills Per Match: {userStats[mode].killsPerMatch}</p>
          <p>Deaths: {userStats[mode].deaths}</p>
          <p>Kills: Deaths ratio: {userStats[mode].kd}</p>
        </div>
        <div className="misc blue-gradient box-shadow">
          <h3>MISC INFO</h3>
          <p>Matches: {userStats[mode].matches}</p>
          <p>Win Rate: {userStats[mode].winRate}</p>
          <p>Minutes Played: {userStats[mode].minutesPlayed}</p>
          <p>Players Outlived: {userStats[mode].playersOutlived}</p>
        </div>
      </div>
      <button onClick={() => setUserName("")}>Try with another username!</button>
    </div>
  )
};

export default StatsDisplay;