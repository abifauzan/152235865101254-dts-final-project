import useToken from "../../hooks/useToken";
import useAuth from "../../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = ({ children }) => {
  return (
    <main>
      <h1>Dashboard</h1>

      <hr />

      <hr />
      {children}
    </main>
  );
};

export default Dashboard;
