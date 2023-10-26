import MainContainer from "../components/Container/Container";
import Main from "../components/Main/Main";

const MainPage = ({ allBooks }) => {
  return (
    <MainContainer>
      <Main allBooks={allBooks} />
    </MainContainer>
  );
};

export default MainPage;
