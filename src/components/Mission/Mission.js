import React from 'react';

const Mission = ({item: value}) => {


    return (


        <div className="mission">
            <div>
                <h2>Miision name - {value.mission_name}</h2>
                <h3>{value.launch_year} year</h3>
            </div>
            <img src={value.links.mission_patch} alt="mission_patch"/>
        </div>

    );
};

export default Mission;