import { useEffect, useState } from 'react';
import './backend.css';
import SearchIcon from './search.svg';
import SongsCard from './SongsCard';


// main -> functional component

// 4bab53e6 ->API KEY
const API_URL = '`https://v1.nocodeapi.com/ojasaklechayt/spotify/rQdIfJbquCcrGSWW/playlists?id=${String(playlist.url).slice(34)}?si=e6158d98d7074ef9&nd`';
// const movie = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }
const Songs = () => {
    // ... your code here ...
    const [mood, setMood] = useState("");
    const [playlist, setPlaylist] = useState({});
    const [error, setError] = useState(null);
    const [card, setcard] = useState({});
    useEffect(() => {
        const fetchPlaylistByMood = async (mood) => {
            // Your Spotify API credentials go here
            const clientId = "537b04c7ca5b4a07a79da5279e455b7e";
            const clientSecret = "d2df375517794be4bffd198413986f7a";

            // Get an access token to make authorized API requests
            const response = await fetch(`https://accounts.spotify.com/api/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
                },
                body: "grant_type=client_credentials",
            });
            const { access_token } = await response.json();

            // Search for playlists based on the mood
            const searchResponse = await fetch(
                `https://api.spotify.com/v1/search?q=${mood}&type=playlist`,
                {
                    headers: {
                        Authorization: "Bearer " + access_token,
                    },
                }
            );
            const { playlists } = await searchResponse.json();

            // Return the first playlist in the list
            return {
                name: playlists.items[0].name,
                url: playlists.items[0].external_urls.spotify,
            };
            const searchfinalrespose = await fetch(`https://v1.nocodeapi.com/ojasaklechayt/spotify/rQdIfJbquCcrGSWW/playlists?id=${String(playlist.url).slice(34)}?si=e6158d98d7074ef9&nd`);
            const { card } = await searchfinalrespose.json();
            return {
                image: card.href,
                name: card.description,
                followers: card.followers.total,
                url: card.external_urls.spotify
            }
        };

        if (mood) {
            fetchPlaylistByMood(mood)
                .then((playlist) => setPlaylist(playlist))
                .then((card) => setcard(card))
                .catch((error) => setError(error));
            console.log(String(playlist.url).slice(34));
        }
    }, [mood]);
    return (
        <div className="App">
            <h1 className="App-title">BeatSpire</h1>
            <input
                className="App-input"
                type="text"
                placeholder="How are you feeling?"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
            />
            {error && <p className="App-error">Error: {error.message}</p>}
            {playlist.name ? (
                <a
                    className="App-playlist"
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {playlist.name}
                    {card.image}

                </a>
            ) : (
                <p className="App-message">Enter your mood to find a playlist</p>
            )}
        </div>
    );
};