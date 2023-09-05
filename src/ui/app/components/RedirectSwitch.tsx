import { Switch } from "react-router-dom";

export const RedirectSwitch: React.FC = ({ children }) => {
  return (
    <Switch>
      {children}
      {/* <Redirect to={AppRoutes[404]} /> */}
    </Switch>
  );
};
