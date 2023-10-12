import { Navigate } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

interface Props {
  component: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute = ({ component: Component, redirectTo = "/" }: Props) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;

  const shouldRedirect = true;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
