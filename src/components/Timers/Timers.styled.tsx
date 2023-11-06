import styled from "@emotion/styled";

export const TimersWrapper = styled.div`
  display: flex;

  justify-content: center;

  gap: 24px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 74px;
  }

  /* display: flex;
  text-align: center;
  justify-content: center;
  gap: 74px;
  margin-bottom: 44px; */
`;

export const TimerTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const TimerWrapper = styled.div`
  background-color: #ffffff;
  padding: 0 33px 8px 33px;
`;

export const Time = styled.p`
  font-family: "Open Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
`;

export const TimeCount = styled.p`
  font-family: "Montserrat";

  font-weight: 500;
  font-size: 10px;
  line-height: 12.19px;

  color: #898f9f;
`;
