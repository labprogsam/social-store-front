import React, { Component, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { getUser } from '../services/user';
import { useAuth } from '../contexts/auth';

function CredentialsVerifier({ component: Comp, location, ...rest }) {
  const { signOut } = useAuth();
  const cookies = Cookies.get();

  const clearCookies = async () => {
    let isLogged = false;
    try {
      // Checks token and returns a bool
      isLogged = await getUser();
      if (isLogged === false || !cookies?.access_token) {
        console.log("entrou")
        signOut();
      }
    } catch (err) {
      console.log("entrou")
      signOut();
    }

    return isLogged
  }

  useEffect(() => {
    clearCookies()  
  }, [cookies]);

  return (
    <Route
      {...rest}
      render={props =>
        // cookies.access_token ? (
        true ? (
          <Comp {...props} />
        ) : (
          <Redirect to={{ pathname: "/app", state: { from: location } }} />
        )
      }
    />
  );
}

export default CredentialsVerifier;