import MainContainer from "../components/Container/Container";
import Main from "../components/Main/Main";

const MainPage = ({ allBooks, handleModalOpen }) => {
  return (
    <MainContainer>
      <Main allBooks={allBooks} handleModalOpen={handleModalOpen} />
    </MainContainer>
  );
};

export default MainPage;
