import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  /* width: 250px; */

  background-color: #f6f7fb;

  & input {
    padding: 11px;
    color: #242a37;
    height: 17px;
    box-sizing: content-box;
  }

  & input.Mui-disabled {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 14px;
    -webkit-text-fill-color: #242a37;
    line-height: 17.07px;
  }

  & .MuiOutlinedInput-root {
    border-radius: 0;
    /* border: 1px solid #a6abb9; */
  }
`;

export const AddResultButton = styled.button`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;
  background-color: #ff6b08;
  color: #ffffff;
  border: none;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 11px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px;
  }
`;

export const StyledLabel = styled.label`
  color: #898f9f;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 11px;
  line-height: 13.41px;

  width: 110px;

  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: 1px solid #a6abb9;
  background-color: #f6f7fb;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  color: #242a37;
  line-height: 17.07px;
  outline: none;
  justify-content: space-between;
  height: 15px;
  box-sizing: content-box;

  padding: 11px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: grid;
    align-items: end;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
  }
`;
