import { useState, useEffect } from "react";
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const LogEdit = () => {
    let { index } = useParams();
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

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((response) => {
            setLog(response.data);
            // console.log(log)
          })
            .catch((e) => console.error(e));
      }, [index]);

    const updateLog = (newLog) => {
        axios
            .put(`${API}/logs/${index}`, newLog)
            .then(
                () => {
            navigate(`/logs`);
                })
            .catch((error) => console.error("catch", error));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog(log)
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

export default LogEdit;