import { Switch, Route, Redirect } from "react-router-dom";

import {Base} from "../components";
import { Home } from "../views";

// Private routes, only logged users can see this views
const AppRoutes = () => {
  return (
    <Base>
      <Switch>
        <Route exact path={`/app`} component={Home} />
        {/* <Route exact path={`/app/agendamento`} component={Agendamento} />
        <Route exact path={`/app/explorar`} component={Explorar} />
        <Route exact path={`/app/perfil`} component={Perfil} /> */}
        <Redirect to={`/app`} />
      </Switch>
    </Base>
  );
};

export default AppRoutes;