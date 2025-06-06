import { Switch, Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import PrivateRoutes from './PrivateRoutes';

const InternalRoutes = () => {
  const cookies = Cookies.get();

  // Checks if user is logged in or not. This information is stored in cookies.
  return (
    <Switch>
      <PrivateRoutes path="/app" component={AppRoutes} />
      <Route path="/auth" component={AuthRoutes} />
      {/* <Redirect to={cookies?.access_token ? '/app' : '/auth'} /> */}
      <Redirect to={true ? '/app' : '/auth'} />
    </Switch>
  );
};

export default InternalRoutes;