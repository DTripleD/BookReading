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
import { days, hours, minutes, seconds } from "../../shared/timeEndOfYear";
import { useAppDispatch } from "../../redux/store";
import {
  addReadPages,
  currentPlanning,
  startPlanning,
} from "../../redux/planning/planningOperations";

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
  const [plainnedBooks, setPlainnedBooks] = useState<Book[]>([]);
  const [endEndTime, setEndEndTime] = useState("");
  const [startStartTime, setStartStartTime] = useState("");
  const [pagesPerDay, setPagesPerDay] = useState(null);

  const [result, setResult] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentPlanning())
      .then((res) => {
        if (res.payload.status === 200) {
          setStart(true);
          setStartStartTime(res.payload.data.planning.startDate);
          setPagesPerDay(res.payload.data.planning.pagesPerDay);
          setEndEndTime(res.payload.data.planning.endDate);
          setPlainnedBooks(res.payload.data.planning.books);
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const ssss = dayjs(startStartTime);
  const eeeeeee = dayjs(endEndTime);

  const daysArray = [];
  let cccccc = ssss;

  while (cccccc.isBefore(eeeeeee) || cccccc.isSame(eeeeeee, "day")) {
    daysArray.push(cccccc.format("YYYY-MM-DD"));
    cccccc = cccccc.add(1, "day");
  }

  const numbersArray = [];

  for (let i = 0; i < daysArray.length; i++) {
    numbersArray.push(pagesPerDay * (i + 1));
  }

  const formattedStartDate = dayjs(startDate).format("YYYY-MM-DD");
  const formatedEndDate = dayjs(finishDate).format("YYYY-MM-DD");

  const dataGenerator = (labels, startPages, progressExpectetion) => {
    return { labels, startPages, progressExpectetion };
  };

  const ddd = dataGenerator(daysArray, [5, 10, 15, 1, 3, 5, 6], numbersArray);

  const data = {
    labels: ddd.labels,
    datasets: [
      {
        label: "plan",
        data: ddd.startPages,
        borderColor: "#FF6B08",
        backgroundColor: "#FF6B08",
      },
      {
        label: "fact",
        data: ddd.progressExpectetion,
        borderColor: "#091E3F",
        backgroundColor: "#091E3F",
      },
    ],
  };

  const options = {
    cubicInterpolationMode: "monotone",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

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

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const handleStartTraining = () => {
    setStart(true);

    const bookIds = selectedBooks.map((book) => book._id);

    dispatch(
      startPlanning({
        startDate: formattedStartDate,
        endDate: formatedEndDate,
        books: bookIds,
      })
    );
  };

  const today = dayjs();
  // const tomorrow = dayjs().add(1, "day");
  const year = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
  const oneDay = 86400000;
  const diff = year + oneDay - new Date().getTime();

  const time = {
    days: days(diff),
    hours: hours(diff),
    minutes: minutes(diff),
    seconds: seconds(diff),
  };

  const date = dayjs(endEndTime);
  const millisecondsEnd = date.valueOf();

  const dateNow = Date.now();

  const raznica = millisecondsEnd - dateNow;

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
                {plainnedBooks.map((book) => (
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
            <StartButton onClick={() => handleStartTraining()}>
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
                <CountNumber>{plainnedBooks.length}</CountNumber>
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
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  dispatch(
                    addReadPages({
                      pages: result,
                    })
                  );
                }}
              >
                <StyledDatePicker
                  label="Start"
                  // onChange={(date) => handleStartDateChange(date)}
                  minDate={today}
                  slots={{
                    openPickerIcon: ArrowDropDownIcon,
                  }}
                />
                <input
                  type="text"
                  onChange={(event) => {
                    setResult(Number(event.target.value));
                  }}
                />
                <AddResultButton>Add result</AddResultButton>
              </form>
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
