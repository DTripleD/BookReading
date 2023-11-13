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
  font-weight: 600;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 17.07px;
    margin-bottom: 28px;
  }
`;

export const StatisticsTitle = styled.h4`
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  margin-bottom: 4px;
  display: flex;

  @media screen and (max-width: 767px) {
    &::before,
    &::after {
      content: "";
      flex: 1 0 auto;
      align-self: center;
      border: 1px solid #e0e5eb;
      margin-left: 13px;
      margin-right: 13px;
    }
  }
  @media screen and (min-width: 1280px) {
    &::before,
    &::after {
      content: "";
      flex: 1 0 auto;
      align-self: center;
      border: 1px solid #e0e5eb;
      margin-left: 13px;
      margin-right: 13px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    text-align: left;

    &::after {
      content: "";
      flex: 1 0 auto;
      align-self: center;
      border: 1px solid #e0e5eb;
      margin-left: 8px;
    }
  }
`;

export const StatTimeListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const StatisticList = styled.ul`
  display: flex;
  gap: 4px;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    height: 101px;
    overflow-y: scroll;
  }
`;

export const Day = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const Time = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const PagesSpan = styled.span`
  color: #898f9f;
`;

export const Pages = styled.p`
  color: #242a37;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
`;

export const StatisticWrapper = styled.div`
  width: 240px;
`;
