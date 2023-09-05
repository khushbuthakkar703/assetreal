import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { AppRoutes } from "../routes";
// import { useAuth0 } from "../../../business/auth/hooks";

type Props = React.ComponentProps<typeof Route>;

export const AuthRoute: React.FC<Props> = ({ ...rest }) => {
  const { is2FAuthenticated } = useSelector((state: any) => state.auth);

  if (is2FAuthenticated) return <Route {...rest} />;

  return <Redirect to={AppRoutes.Auth.SignIn} />;
};
