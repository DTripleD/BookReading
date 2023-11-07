import {
  Day,
  Pages,
  PagesSpan,
  ResultTitle,
  ResultsWrapper,
  StatTimeListItem,
  StatisticList,
  StatisticWrapper,
  StatisticsTitle,
  Time,
} from "./Results.styled";
import ProgressForm from "../ProgressForm/ProgressForm";
import { nanoid } from "nanoid";

const Result = ({ current }) => {
  return (
    <>
      <ResultsWrapper>
        <ResultTitle>Results</ResultTitle>
        <ProgressForm />
        <StatisticWrapper>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <StatisticList>
            {current.stats.map((stat) => (
              <StatTimeListItem key={nanoid()}>
                <Day>{stat.time.split(" ")[0]}</Day>
                <Time>{stat.time.split(" ")[1]}</Time>
                <Pages>
                  {stat.pagesCount} <PagesSpan>pages</PagesSpan>
                </Pages>
              </StatTimeListItem>
            ))}
          </StatisticList>
        </StatisticWrapper>
      </ResultsWrapper>
    </>
  );
};

export default Result;
