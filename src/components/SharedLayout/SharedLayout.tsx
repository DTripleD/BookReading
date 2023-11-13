import Header from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
