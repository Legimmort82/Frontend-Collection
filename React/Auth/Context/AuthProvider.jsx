import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { apiGetCurrentUser } from "@/api/user";

const authContext = createContext();

const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(() =>
    localStorage.getItem("accessToken")
  );

  const isLoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const currentUsers = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await apiGetCurrentUser();
    setCurrentUser(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      currentUsers();
    }
  }, [isLoggedIn]);

  const values = {
    logout,
    isLoggedIn,
    currentUser,
    saveAccessToken,
    isLoading,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, useAuthContext };
