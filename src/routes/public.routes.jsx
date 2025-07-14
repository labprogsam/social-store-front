import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';

import {CategoriesView, HomeView, ProductView, OngView, Login, OngProduct} from '../views';

// Public routes, everyone can see this views
const PublicRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/home`} component={HomeView} />
      <Route path={`${path}/categories/:id`} component={CategoriesView} />
      <Route exact path={`${path}/ong/produtos/criar`} component={OngProduct} />
      <Route exact path={`${path}/ong`} component={OngView} />
      <Route exact path={`${path}/produtos`} component={ProductView} />
      <Route exact path={`${path}/login`} component={Login} />

      {/* if not find, go to home */}
      <Redirect to={`${path}/home`} component={HomeView} />
    </Switch>
  );
};

export default PublicRoutes;