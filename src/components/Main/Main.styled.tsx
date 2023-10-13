import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";

  font-weight: 500;

  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const Input = styled.input`
  padding: 12px;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 40px;
`;

export const Instruction = styled.div`
  background-color: #ffffff;
  padding: 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const StepsNum = styled.h2`
  font-family: "Montserrat";
  font-weight: 600;

  font-size: 19px;
  line-height: 23.16px;
  color: #242a37;
`;

export const StepsDo = styled.h3`
  font-family: "Montserrat";

  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;

  color: #242a37;
`;

export const StepsResult = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;
