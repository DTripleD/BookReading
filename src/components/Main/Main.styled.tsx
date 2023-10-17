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
  background-color: transparent;
  border: 1px solid #a6abb9;
  padding: 12px;
  margin-top: 8px;
  outline: none;

  &#title {
    width: 346px;
  }
  &#author {
    width: 250px;
  }
  &#date {
    width: 134px;
  }
  &#pages {
    width: 134px;
  }

  &:focus {
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
    /* border: none; */
    border-color: #1d1d1b26;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const FormButton = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #000000;
  border: 1px solid #242a37;
  background-color: transparent;
  padding: 12px 75px;
  height: 42px;
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

export const Title = styled.h3`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 19px;
  line-height: 23.16px;
  color: #242a37;
  margin-bottom: 24px;
`;

export const ListTitle = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #898f9f;
`;

export const ListText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.07px;
  color: #242a37;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091e3f1a;
  padding: 22px 84px 22px 20px;
`;

export const ListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BooksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 48px;
`;

export const TrainingBtn = styled.button`
  color: #ffffff;
  font-family: "Montserrat";
  font-weight: 600;

  font-size: 16px;
  line-height: 19.5px;
  background-color: #ff6b08;
  width: 200px;
  border: none;
  padding: 10px 0;
  margin-top: 40px;
`;
