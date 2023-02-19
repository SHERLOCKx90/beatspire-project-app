import React from "react";
import './App.css';

const SongsCard = ({ song }) => {
    return (
        <div className='song'>
            <div>
                <p>{song.name}</p>
            </div>
            <div className=''>
                <img src={song.name !== 'N/A' ? song.image : 'https://via.placeholder.com/400'} alt={song.Title}></img>
            </div>
            <div>
                <span>{song.Type}</span>
                <h3>{song.Title}</h3>
            </div>
        </div>
    );
}

export default SongsCard;