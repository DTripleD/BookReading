import { useSelector } from "react-redux";
import {
  AddButton,
  BoxName,
  CountBackground,
  CountNumber,
  CountWrapper,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  SelectedBookTitle,
  StartButton,
  MainTitle,
  TitleWrapper,
  LineWrapper,
  LineUpperText,
  StyledDatePicker,
  SelectedBooksList,
  ResultsWrapper,
  AddResultButton,
  ResultTitle,
  StatisticsTitle,
  SectionWrapper,
  BigElement,
  TimerWrapper,
  Timers,
  Time,
  TimerTitle,
} from "./Progress.styled";
import { userBooks } from "../../redux/books/booksSelectors";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import dayjs from "dayjs";
import { data, options } from "../../shared/optionsForChart";
import { days, hours, minutes, seconds } from "../../shared/timeEndOfYear";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface Book {
  author: string;
  pagesFinished: number;
  pagesTotal: number;
  publishYear: number;
  title: string;
  _id: string;
}

const Progress = () => {
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [selectedBookTitle, setSelectedBookTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [start, setStart] = useState(false);
  const [, setDateTime] = useState(new Date());

  const date1 = dayjs(startDate);
  const date2 = dayjs(finishDate);

  const diffInDays = isNaN(date2.diff(date1, "day"))
    ? 0
    : date2.diff(date1, "day");
  // const diffInHours = date2.diff(date1, "hour");
  // const diffInSeconds = date2.diff(date1, "seconds");

  const allBooks = useSelector(userBooks);

  const handleStartDateChange = (date) => {
    const formattedDate = dayjs(date.$d).format("YYYY-MM-DD HH:mm:ss");
    setStartDate(formattedDate);
  };

  const handleFinishDateChange = (date) => {
    const formattedDate = dayjs(date.$d).format("YYYY-MM-DD HH:mm:ss");
    setFinishDate(formattedDate);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedBook = allBooks.goingToRead.find(
      (book: Book) => book.title === selectedBookTitle
    );
    setSelectedBooks((prevSelectedBooks) => [
      ...prevSelectedBooks,
      selectedBook as Book,
    ]);
    return;
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedBookTitle(event.target.value as string);
  };

  const today = dayjs();
  // const tomorrow = dayjs().add(1, "day");

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const year = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

  const oneDay = 86400000;
  const diff = year + oneDay - new Date().getTime();

  const time = {
    days: days(diff),
    hours: hours(diff),
    minutes: minutes(diff),
    seconds: seconds(diff),
  };

  const f = Date.parse(finishDate);

  const dateNow = Date.now();

  const raznica = f - dateNow;

  const timeOfRaznica = {
    days: days(raznica),
    hours: hours(raznica),
    minutes: minutes(raznica),
    seconds: seconds(raznica),
  };

  return (
    <>
      <SectionWrapper>
        {start ? (
          <BigElement>
            <Timers>
              <div>
                <TimerTitle>Years countdown</TimerTitle>
                <TimerWrapper>
                  <Time>
                    {time.days}:{time.hours}:{time.minutes}:{time.seconds}
                  </Time>
                  <p>DAYS HRS MINS SECS</p>
                </TimerWrapper>
              </div>
              <div>
                <TimerTitle>Goals countdown</TimerTitle>
                <TimerWrapper>
                  <Time>
                    {timeOfRaznica.days}:{timeOfRaznica.hours}:
                    {timeOfRaznica.minutes}:{timeOfRaznica.seconds}
                  </Time>
                  <p>DAYS HRS MINS SECS</p>
                </TimerWrapper>
              </div>
            </Timers>
            <div>
              <ListHeaderWrapper key={123}>
                <ListHeaderText>Book title</ListHeaderText>
                <ListHeaderText>Author</ListHeaderText>
                <ListHeaderText>Year</ListHeaderText>
                <ListHeaderText>Pages</ListHeaderText>
              </ListHeaderWrapper>
              <SelectedBooksList>
                {selectedBooks.map((book) => (
                  <ListItem key={book._id}>
                    <input
                      type="checkbox"
                      onClick={() => console.log(book._id)}
                    />
                    <SelectedBookTitle>{book.title}</SelectedBookTitle>
                    <SelectedBookTitle>{book.author}</SelectedBookTitle>
                    <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
                    <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
                  </ListItem>
                ))}
              </SelectedBooksList>
            </div>
          </BigElement>
        ) : (
          <BigElement>
            <TitleWrapper>
              <MainTitle>My training</MainTitle>
            </TitleWrapper>
            <form onSubmit={(event) => handleFormSubmit(event)}>
              <div>
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
              </div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose books from the library
                </InputLabel>
                <Select
                  onChange={(event) => handleSelectChange(event)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedBookTitle}
                  label="Age"
                >
                  {allBooks.goingToRead.map(
                    (book: {
                      author: string;
                      pagesFinished: number;
                      pagesTotal: number;
                      publishYear: number;
                      title: string;
                      _id: string;
                    }) => (
                      <MenuItem key={book._id} value={book.title}>
                        {book.title}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <AddButton type="submit" disabled={selectedBookTitle === ""}>
                Add
              </AddButton>
            </form>
            <ListHeaderWrapper key={123}>
              <ListHeaderText>Book title</ListHeaderText>
              <ListHeaderText>Author</ListHeaderText>
              <ListHeaderText>Year</ListHeaderText>
              <ListHeaderText>Pages</ListHeaderText>
            </ListHeaderWrapper>
            <SelectedBooksList>
              {selectedBooks.map((book) => (
                <ListItem key={book._id}>
                  <SelectedBookTitle>{book.title}</SelectedBookTitle>
                  <SelectedBookTitle>{book.author}</SelectedBookTitle>
                  <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
                  <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
                </ListItem>
              ))}
            </SelectedBooksList>
            <StartButton onClick={() => setStart(true)}>
              Start traning
            </StartButton>
          </BigElement>
        )}
        <div>
          <TitleWrapper>
            <MainTitle>My goals</MainTitle>
          </TitleWrapper>
          <CountBackground>
            <div>
              <CountWrapper>
                <CountNumber>{selectedBooks.length}</CountNumber>
              </CountWrapper>
              <BoxName>Amount of books</BoxName>
            </div>
            <div>
              <CountWrapper>
                <CountNumber>{diffInDays}</CountNumber>
              </CountWrapper>

              <BoxName>Amount of days</BoxName>
            </div>
            {start && (
              <div>
                <CountWrapper>
                  <CountNumber>{diffInDays}</CountNumber>
                </CountWrapper>

                <BoxName>Books left</BoxName>
              </div>
            )}
          </CountBackground>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <LineWrapper>
          <LineUpperText>Amont of pages / DAY</LineUpperText>
          <Line options={options} data={data} />
        </LineWrapper>
        <div>
          {start && (
            <ResultsWrapper>
              <ResultTitle>Results</ResultTitle>
              <StyledDatePicker
                label="Start"
                // onChange={(date) => handleStartDateChange(date)}
                minDate={today}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
              <input type="text" />
              <AddResultButton>Add result</AddResultButton>
              <StatisticsTitle>Statistics</StatisticsTitle>
              <ul>
                <li></li>
              </ul>
            </ResultsWrapper>
          )}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Progress;
