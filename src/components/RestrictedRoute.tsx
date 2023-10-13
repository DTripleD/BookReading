import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

interface Props {
  component: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute = ({ component: Component, redirectTo = "/" }: Props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
