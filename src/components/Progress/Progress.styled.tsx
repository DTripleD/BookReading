import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 250px;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  box-shadow: 4px 4px 8px 0px #242a3726;
  width: 100px;
  height: 100px;
`;

export const CountNumber = styled.p`
  font-family: "Open Sans";
  font-weight: 700;

  font-size: 45px;
  line-height: 38px;
  color: #091e3f;
`;

export const MainTitle = styled.h3`
  font-family: "Montserrat";
  font-weight: 600;

  font-size: 20px;
  line-height: 24.38px;
  color: #ffffff;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding: 18px 0;
  background-color: #b1b5c2;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
`;

export const BoxName = styled.p`
  font-family: "Montserrat";

  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;

  color: #898f9f;
  text-align: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

export const CountBackground = styled.div`
  display: flex;
  padding: 48px 34px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
`;

export const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e0e5eb;
  border-top: 1px solid #e0e5eb;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ListHeaderText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const SelectedBookTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const StartButton = styled.button`
  width: 200px;
  border: none;
  padding: 10px 0;
  background-color: #ff6b08;
  color: #ffffff;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  letter-spacing: 0em;
  text-align: center;
`;

export const AddButton = styled.button`
  border: 1px solid #242a37;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: center;
  color: #000000;
  padding: 12px 76px;
  background-color: transparent;
`;

export const LineWrapper = styled.div`
  width: 100%;
  max-height: 340px;
  padding: 35px 77px 51px 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f40;
`;

export const LineUpperText = styled.p`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;
  text-transform: uppercase;
`;

export const TrainingWrapper = styled.div`
  width: 928px;
`;

export const SelectedBooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 151px;
  overflow-x: hidden;
  margin: 20px 0;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
  padding: 20px 24px 22px 24px;
  height: 100%;
`;

export const AddResultButton = styled.button`
  font-family: "Montserrat";
  font-weight: 600px;
  font-size: 16px;
  line-height: 19.5px;
  background-color: #ff6b08;
  color: #ffffff;
  border: none;
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
`;

export const BigElement = styled.div`
  width: 100%;
`;

export const TimerWrapper = styled.div`
  background-color: #ffffff;
  padding: 0 45px;
`;

export const Timers = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 74px;
  margin-bottom: 44px;
`;

export const Time = styled.p`
  font-family: "Open Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
`;

export const TimerTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;
