const Login = () => {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

  return (
    <div className="flex flex-col items-start">
      <h1 className="mb-4">Login:</h1>
      <a href={AUTH_URL} className="px-4 py-2 bg-green-500 text-white">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
