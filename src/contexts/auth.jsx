import React, { useState, useContext, createContext, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import { postLogin } from '../services/login';
import { clearCookies } from '../utils/clearCookies';
import { useGlobalAlert } from "../contexts/alert";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [, setAlert] = useGlobalAlert();

  const authSuccess = useCallback(
    ({ access_token, refresh_token, client_id, email, fullName }) => {

      Cookies.set('access_token', access_token, { path: '' });
      // Cookies.set('refresh_token', refresh_token, { path: '' });
      // Cookies.set('client_id', client_id, { path: '' });
      // Cookies.set('email', email, { path: '' });
      // Cookies.set('fullName', fullName, { path: '' });

        setTimeout(() => {
          if (!pathname.startsWith('/app')) {
            replace('/app');
          }
        }, 300);
    },
    [pathname],
  );

  const signIn = useCallback(
    async (params) => {
      const { email, password } = params;
      setLoading(true);
      try {
        const response = await postLogin(email, password);
        if (response?.status === 200) {
          const { client_id, access_token, refresh_token, email, fullName } = response.data;
          authSuccess({ access_token, refresh_token, client_id, email, fullName });
        }
      } catch (error) {
        setAlert({
          title: 'Um erro ocorreu ao validar seu login.',
          type: 'error', // success, error, warning, question
          open: true,
          text: "Um erro ocorreu, tente novamente mais tarde",
          confirmButton: () => { },
        })
      }

      setLoading(false);
    },
    [authSuccess],
  );

  const signOut = useCallback(async () => {
    clearCookies();

    if (!pathname.startsWith('/auth')) {
      replace('/auth');
    }
  }, [replace, pathname]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;