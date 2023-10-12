import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/main" />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/main"
              />
            }
          />
          <Route
            path="/main"
            element={<PrivateRoute component={<MainPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
