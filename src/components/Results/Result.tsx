import {
  ResultTitle,
  ResultsWrapper,
  StatTimeListItem,
  StatisticsTitle,
} from "./Results.styled";
import ProgressForm from "../ProgressForm/ProgressForm";
import { nanoid } from "nanoid";

const Result = ({ current }) => {
  return (
    <>
      <ResultsWrapper>
        <ResultTitle>Results</ResultTitle>
        <ProgressForm />
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ul>
          {current.stats.map((stat) => (
            <StatTimeListItem key={nanoid()}>
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
