import React from 'react';
import { Link } from 'react-router-dom';

const Log = ({index, log, }) => {
    console.log(log.mistakesWereMadeToday)
    return (
        <tr>
            <td>
                <span>
                    {index+1}
                </span>
            </td>
                
            <td>
                <span>
                    {log.captainName}
                </span>
            </td>
            
            <td>
                <span>
                    {log.title}
                </span>
            </td>

            <td>
                <span>
                    {log.post}
                </span>
            </td>

            <td>
                <span>
                    {log.mistakesWereMadeToday}
                </span>
            </td>

            <td>
                <span>
                    {log.daysSinceLastCrisis}
                </span>
            </td>
        </tr>
    );
};

export default Log;

