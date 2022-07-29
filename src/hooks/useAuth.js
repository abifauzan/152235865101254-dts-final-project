import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  const navigate = useNavigate();

  const postLogin = useCallback(async () => {
    try {
      const {
        data: { access_token, refresh_token, expires_in },
      } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          code,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );

      setAccessToken(access_token);
      setRefreshToken(refresh_token);
      setExpiresIn(expires_in);

      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  }, [code, navigate]);

  useEffect(() => {
    postLogin();
  }, [postLogin]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(async () => {
      try {
        const {
          data: { access_token, expires_in },
        } = await axios.post(`${process.env.REACT_APP_BASE_URL}/refresh`, {
          refreshToken,
        });
        setAccessToken(access_token);
        setExpiresIn(expires_in);
      } catch {
        navigate("/");
      }
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn, navigate]);

  return accessToken;
};

export default useAuth;
