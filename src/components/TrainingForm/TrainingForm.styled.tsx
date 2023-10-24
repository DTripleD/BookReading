import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 250px;
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

export const DataPickerWrapper = styled.div`
  display: flex;
  gap: 44px;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
`;
