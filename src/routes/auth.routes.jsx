import React from 'react';
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';

import {Register, Login, Forgot} from '../views';

// Public routes, everyone can see this views
const AuthRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
      <Route path={`${path}/forgot-password`} component={Forgot} />
      <Redirect to={`${path}/login`} />
    </Switch>
  );
};

export default AuthRoutes;