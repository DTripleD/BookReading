import MainContainer from "../components/Container/Container";
import Progress from "../components/Progress/Progress";

const ProgressPage = ({ allBooks }) => {
  return (
    <MainContainer>
      <Progress allBooks={allBooks} />
    </MainContainer>
  );
};

export default ProgressPage;
