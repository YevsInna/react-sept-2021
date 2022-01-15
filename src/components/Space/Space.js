import React, {useEffect, useState} from 'react';
import Mission from "../Mission/Mission";

const Space = () => {

    const [fligtsList, setFligtsList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFligtsList(value.filter(value => value.launch_year !== '2020')));
    }, []);

    return (
        <div>
            {
                fligtsList.map(value => <Mission key={value.flight_number} item={value}/>)
            }
        </div>
    );
};

export default Space;
