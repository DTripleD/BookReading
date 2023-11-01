import Header from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Background } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Background>
          <Outlet />
        </Background>
      </Suspense>
    </>
  );
};

export default SharedLayout;
