import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useState, lazy } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAppDispatch } from "./redux/store";
import Modal from "./components/Modal/Modal";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./shared/toastOptions";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const ProgressPage = lazy(() => import("./pages/ProgressPage/ProgressPage"));

function App() {
  const dispatch = useAppDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [isModalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState("");

  const handleModalOpen = (id) => {
    setModalId(id);
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

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
            element={
              <PrivateRoute
                component={<MainPage handleModalOpen={handleModalOpen} />}
              />
            }
          />
          <Route
            path="/progress"
            element={
              <PrivateRoute
                component={<ProgressPage handleModalOpen={handleModalOpen} />}
              />
            }
          />
        </Route>
      </Routes>
      {isModalActive && <Modal id={modalId} onClose={handleModalClose} />}
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

export default App;
