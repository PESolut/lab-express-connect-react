import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const LogNew = () => {
    const navigate = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };

    const addLog = (newLog) => {
        axios
            .post(`${API}/logs`, newLog)
            .then(
                () => {
            navigate(`/logs`);
                })
            .catch((error) => console.error("catch", error));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log)
  };

    return (
        <div className="LogsNew">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="MacTavish"
                required
                />

                <label htmlFor="title">Title:</label>
                <input
                id="title"
                value={log.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Game Over"
                required
                />

                <label htmlFor="post">Message:</label>
                <input
                id="post"
                value={log.post}
                type="text"
                onChange={handleTextChange}
                placeholder="Price?... This belongs to you, sir."
                required
                />

                <label htmlFor="mistakesWereMadeToday">Mistakes made today?</label>
                <input
                id="mistakesWereMadeToday"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={log.mistakesWereMadeToday}
                />

                <label htmlFor="daysSinceLastCrisis">Days since Last Crisis: </label>
                <input
                id="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis}
                type="text"
                onChange={handleTextChange}
                placeholder="0"
                required
                />

                <br />
                <input type="submit" />   
            </form>
        </div>
    );
};

export default LogNew;