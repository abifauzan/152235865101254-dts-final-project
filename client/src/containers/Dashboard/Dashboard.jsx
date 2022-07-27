import useToken from "../../hooks/useToken";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { useEffect, useState } from "react";
import Player from "../Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
});

const Dashboard = ({ children }) => {
  const { token } = useToken();

  const accessToken = useAuth(token);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    if (!playingTrack) return;
    (async () => {
      const {
        data: { lyrics },
      } = await axios.get(`${process.env.REACT_APP_BASE_URL}/lyrics`, {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      });
      setLyrics(lyrics);
    })();
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <main>
      <h1>Dashboard</h1>
      <h3>Token: {token}</h3>
      <hr />

      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />

      <hr />
      {children}
    </main>
  );
};

export default Dashboard;
