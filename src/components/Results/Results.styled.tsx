import styled from "@emotion/styled";

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;

  height: 100%;
  padding: 20px 20px 22px 20px;

  @media screen and (min-width: 768px) {
    padding: 28px 96px 32px 96px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 24px 22px 24px;
  }
`;

export const ResultTitle = styled.h4`
  font-family: "Montserrat";

  font-weight: 600;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
`;

export const StatisticsTitle = styled.h4`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  margin-top: 24px;
  margin-bottom: 4px;
`;

export const StatTimeListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const StatisticList = styled.ul`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const Day = styled.p`
  font-family: "Montserrat";

  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const Time = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const PagesSpan = styled.span`
  color: #898f9f;
`;

export const Pages = styled.p`
  font-family: "Montserrat";
  color: #242a37;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
`;
