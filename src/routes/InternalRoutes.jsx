import { Switch, Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';
import CredentialsVerifier from './CredentialsVerifier';

const InternalRoutes = () => {
  const cookies = Cookies.get();

  // Checks if user is logged in or not. This information is stored in cookies.
  return (
    <Switch>
      <CredentialsVerifier path="/auth" component={PrivateRoutes} />
      <Route path="/app" component={PublicRoutes} />
      {/* <Redirect to={cookies?.access_token ? '/app' : '/auth'} /> */}
      <Redirect to={false ? '/auth/ong' : '/app'} />
    </Switch>
  );
};

export default InternalRoutes;