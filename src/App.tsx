import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useState } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAppDispatch } from "./redux/store";
import ProgressPage from "./pages/ProgressPage";
import { useSelector } from "react-redux";
import { userBooks } from "./redux/books/booksSelectors";
import { getBooks } from "./redux/books/booksOperations";
import Modal from "./components/Modal/Modal";

function App() {
  const dispatch = useAppDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  const allBooks = useSelector(userBooks);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getBooks());
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
              <PrivateRoute component={<MainPage allBooks={allBooks} />} />
            }
          />
          <Route
            path="/progress"
            element={
              <PrivateRoute
                component={
                  <ProgressPage
                    allBooks={allBooks}
                    handleModalOpen={handleModalOpen}
                  />
                }
              />
            }
          />
        </Route>
      </Routes>
      {isModalActive && <Modal id={modalId} onClose={handleModalClose} />}
    </>
  );
}

export default App;
