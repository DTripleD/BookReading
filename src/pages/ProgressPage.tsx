import MainContainer from "../components/Container/Container";
import Progress from "../components/Progress/Progress";

const ProgressPage = ({ allBooks, handleModalOpen }) => {
  return (
    <MainContainer>
      <Progress allBooks={allBooks} handleModalOpen={handleModalOpen} />
    </MainContainer>
  );
};

export default ProgressPage;
