import styled from "@emotion/styled";

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  box-shadow: 4px 4px 8px 0px #242a3726;
  width: 100px;
  height: 100px;
  &.isTrain {
    width: 63px;
    height: 63px;
    @media screen and (min-width: 768px) {
      width: 100px;
      height: 60px;
    }
    @media screen and (min-width: 1280px) {
      width: 66px;
      height: 66px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 60px;
  }
`;

export const CountNumber = styled.p`
  font-family: "Open Sans";
  font-weight: 700;

  font-size: 45px;
  line-height: 38px;
  color: #091e3f;

  &.isTrain {
    font-size: 36px;
  }

  &#left {
    color: #ff6b08;
  }
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

  &#training {
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      margin-bottom: 28px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 24px;
    }
  }

  &#tablet {
    padding: 18px 91px;
  }
`;

export const BoxName = styled.p`
  font-family: "Montserrat";

  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;

  color: #898f9f;
  text-align: center;
  margin-top: 14px;

  &.isTrain {
    font-size: 12px;
    line-height: 14.63px;
    width: 57px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 11px;
    line-height: 13.41px;
  }
`;

export const CountBackground = styled.div`
  display: flex;
  padding: 48px 30px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 22px 52px 22px 28px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    padding: 48px 34px;
    gap: 20px;
  }

  &.isTrain {
    padding: 32px 28px;
    @media screen and (min-width: 768px) {
      padding: 20px 43px 26px 42px;
    }
    @media screen and (min-width: 1280px) {
      padding: 80px 22px 79px 22px;
    }
  }
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
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const TrainingWrapper = styled.div`
  width: 928px;
`;

export const NumbersWrapper = styled.div`
  display: flex;
  gap: 20px;

  &.isTrain {
    gap: 12px;
  }
  @media screen and (min-width: 768px) {
    gap: 40px;
    &.isTrain {
      gap: 12px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
    &.isTrain {
      gap: 23px;
    }
  }
`;

export const ChartResultWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 1279px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    margin-bottom: 39px;
    align-items: flex-start;
    gap: 32px;

    &.isTrain {
      align-items: flex-end;
    }
  }
`;

export const WrapperForTimersDesc = styled.div`
  width: 100%;
`;

export const WrapperWithoutTimer = styled.div`
  width: 100%;
`;
