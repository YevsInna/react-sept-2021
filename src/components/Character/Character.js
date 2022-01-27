import React, {useEffect, useState} from 'react';

const Character = ({character}) => {
    const [characterItem, setCharacterItem] = useState(null);
    useEffect(() => {
        fetch(`${character}`.then(value => value.json()).then(value => setCharacterItem(value)));
    }, [character]);

    return (
        <div>
            {
                characterItem && (
                    <div>
                        <img src={characterItem.image} alt="photo"/>
                        <h3>{characterItem.name}</h3>
                        <p>Status: {characterItem.status}</p>
                        <p>Gender: {characterItem.gender}</p>
                        <p>Origion: {characterItem.origion.name}</p>
                        <p>Location: {characterItem.location.name}</p>
                    </div>
                )
            }
        </div>
    );
};

export {Character};