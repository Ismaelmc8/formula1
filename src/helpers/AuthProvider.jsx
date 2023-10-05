import React, {useState, useEffect, createContext} from "react";
import { loginRequest } from "../pages/login/loginRequests";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [authToken, setAuthToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateAuthToken = (token) => {
      setAuthToken(token);
      setIsLoggedIn(true);
    };

    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setAuthToken(storedToken);
        setIsLoggedIn(true);
      }
    }, []);

    const value = {
        authToken,
        setAuthToken,
        isLoggedIn,
        setIsLoggedIn
    }

    const login = async (loginValues) => {
        try {
            const response = await loginRequest(formData);
            console.log('Response:', response);
            if (response.token) {
              localStorage.setItem("token", response.token);
             
              navigate('/home');
            }
          } catch (error) {
            console.log('Error:', error);
          }
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}