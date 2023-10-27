import {
  ResultTitle,
  ResultsWrapper,
  StatTimeListItem,
  StatisticsTitle,
} from "./Results.styled";
import ProgressForm from "../ProgressForm/ProgressForm";

const Result = ({ current }) => {
  return (
    <>
      <ResultsWrapper>
        <ResultTitle>Results</ResultTitle>
        <ProgressForm />
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ul>
          {current.stats.map((stat) => (
            <StatTimeListItem key={new Date().getTime()}>
              <p>{stat.time.split(" ")[0]}</p>
              <p>{stat.time.split(" ")[1]}</p>
              <p>{stat.pagesCount} pages</p>
            </StatTimeListItem>
          ))}
        </ul>
      </ResultsWrapper>
    </>
  );
};

export default Result;
