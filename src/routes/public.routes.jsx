import React from 'react';
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';

import {CategoriesView, HomeView, ProductView, OngView} from '../views';

// Public routes, everyone can see this views
const PublicRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/home`} component={HomeView} />
      <Route path={`${path}/categories/:id`} component={CategoriesView} />
      <Route path={`${path}/ong`} component={OngView} />
      <Route path={`${path}/product`} component={ProductView} />

      {/* if not find, go to home */}
      <Redirect to={`${path}/home`} component={HomeView} />
    </Switch>
  );
};

export default PublicRoutes;