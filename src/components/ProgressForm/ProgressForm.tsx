import {
  AddResultButton,
  InputsWrapper,
  StyledDatePicker,
  StyledInput,
  StyledLabel,
} from "./ProgressForm.styled";
import { useAppDispatch } from "../../redux/store";
import { addReadPages } from "../../redux/planning/planningOperations";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import dayjs from "dayjs";

const ProgressForm = () => {
  const [result, setResult] = useState("");
  const today = dayjs();

  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(
          addReadPages({
            pages: Number(result),
          })
        );
        setResult("");
      }}
    >
      <InputsWrapper>
        <StyledLabel>
          Date
          <StyledDatePicker
            disabled
            defaultValue={today}
            // onChange={(date) => handleStartDateChange(date)}
            minDate={today}
            slots={{
              openPickerIcon: ArrowDropDownIcon,
            }}
          />
        </StyledLabel>
        <StyledLabel>
          Amount of pages
          <StyledInput
            type="text"
            value={result}
            onChange={(event) => {
              setResult(event.target.value);
            }}
          />
        </StyledLabel>
      </InputsWrapper>
      <AddResultButton>Add result</AddResultButton>
    </form>
  );
};

export default ProgressForm;
