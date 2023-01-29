import { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const LogShow = () => {
    const [log, setLog] = useState([])
    let { index } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios
          .get(`${API}/logs/${index}`)
          .then((response) => {
            setLog(response.data);
          })
          .catch(() => {
            navigate("/four-zero-four");
          });
      }, [index, navigate]);

    const handleDelete = () => {
        let confirmResult = window.confirm('Are you sure you want to delete')
        if (confirmResult) {
        axios
            .delete(`${API}/logs/${index}`)
            .then(() => {
                navigate(`/logs`);
            })
            .catch((e) => console.error(e));
      } else {

      }
    }

    return (
        <div className="LogShow">
            <section>
                <h3>{log.title}</h3>
                <p>{log.post}</p>
                <p>Mistakes Made: { log.mistakesWereMadeToday ? 'Yes' : 'No' } Author: { log.captainName } Days Since Crisis: { log.daysSinceLastCrisis }</p>
            </section>
            <div className="showNavigation">
                <Link to={`/bookmarks`}>
                    <button>Back</button>
                </Link>
                <Link to={`/bookmarks/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default LogShow;