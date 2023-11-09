import styled from "@emotion/styled";

export const InstructionWrapper = styled.div`
  background-color: #ffffff;
  padding: 43px 18px 98px 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 40px;
    width: 608px;
  }
`;

export const StepsNum = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 21.94px;
  color: #242a37;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 19px;
    line-height: 23.16px;
  }
`;

export const NumWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const StepsDo = styled.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;

  color: #242a37;
`;

export const StepWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 8px;
`;

export const StepsResult = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;
