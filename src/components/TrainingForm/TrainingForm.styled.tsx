import styled from "@emotion/styled";
import { FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  outline: none;

  & .MuiInputBase-root {
    border-radius: 0;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const AddButton = styled.button`
  border: 1px solid #242a37;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: center;
  color: #000000;
  padding: 12px 70px;
  width: 171px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  @media screen and (min-width: 1280px) {
    padding: 12px 76px;
  }
`;

export const DataPickerWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 44px;
    justify-content: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledFormControl = styled(FormControl)`
  & .MuiInputBase-root {
    border-radius: 0;
  }
`;
