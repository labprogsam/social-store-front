import { Switch, Route, Redirect } from "react-router-dom";

// import { HomeOng, ProductOng } from "../views";

// Private routes, only logged users can see this views
const AppRoutes = () => {
  return (
    <Switch>
      {/* <Route exact path={`/auth/ong/home`} component={HomeOng} />
      <Route exact path={`/auth/ong/produto`} component={ProductOng} /> */}

      {/* if not find, go to home */}
      {/* <Redirect to={`/auth/ong/home`} /> */}
    </Switch>
  );
};

export default AppRoutes;