import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsLoading } from "../redux/auth/selectors";

interface Props {
  component: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute = ({ component: Component, redirectTo = "/" }: Props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
