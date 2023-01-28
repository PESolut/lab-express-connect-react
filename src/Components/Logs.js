import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log('API host address:',API)

const Logs = () => {
    const [logs, setLogs] = useState([])
    useEffect(() => {
        axios
            .get(`${API}/logs`)
            .then((response) => setLogs(response.data))
            .catch((error) => console.error("catch", error))
    }, []);
    console.log(logs)

    return (
        <div className="Logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Message</th>
                            <th>Mistakes</th>
                            <th>Days Since Crisis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            logs.map((log, index) => {
                                return <Log key={index} log={log} index={index}/>
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Logs;