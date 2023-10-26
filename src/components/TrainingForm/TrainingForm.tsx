import {
  AddButton,
  DataPickerWrapper,
  FormWrapper,
  StyledDatePicker,
} from "./TrainingForm.styled";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import dayjs from "dayjs";

const TrainingForm = ({
  handleFormSubmit,
  handleStartDateChange,
  handleFinishDateChange,
  setSelected,
  selected,
  filteredBooks,
}) => {
  const today = dayjs();

  return (
    <form
      onSubmit={(event) => {
        handleFormSubmit(event);
        setSelected("");
      }}
    >
      <DataPickerWrapper>
        <StyledDatePicker
          label="Start"
          onChange={(date) => handleStartDateChange(date)}
          minDate={today}
          slots={{
            openPickerIcon: ArrowDropDownIcon,
          }}
        />
        <StyledDatePicker
          label="Finish"
          onChange={(date) => handleFinishDateChange(date)}
          minDate={today}
          slots={{
            openPickerIcon: ArrowDropDownIcon,
          }}
        />
      </DataPickerWrapper>
      <FormWrapper>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Choose books from the library
          </InputLabel>
          <Select
            onChange={(event) => setSelected(event.target.value)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Age"
          >
            {filteredBooks.map(
              (book: {
                author: string;
                pagesFinished: number;
                pagesTotal: number;
                publishYear: number;
                title: string;
                _id: string;
              }) => (
                <MenuItem key={book._id} value={book._id}>
                  {book.title}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <AddButton type="submit" disabled={selected === ""}>
          Add
        </AddButton>
      </FormWrapper>
    </form>
  );
};

export default TrainingForm;
