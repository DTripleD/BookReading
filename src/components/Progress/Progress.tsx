import { useSelector } from "react-redux";
import {
  BoxName,
  CountBackground,
  CountNumber,
  CountWrapper,
  StartButton,
  MainTitle,
  TitleWrapper,
  StyledDatePicker,
  ResultsWrapper,
  AddResultButton,
  ResultTitle,
  StatisticsTitle,
  SectionWrapper,
  BigElement,
  StatTimeListItem,
} from "./Progress.styled";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import dayjs from "dayjs";
import { useAppDispatch } from "../../redux/store";
import {
  addReadPages,
  currentPlanning,
  startPlanning,
} from "../../redux/planning/planningOperations";
import { planningBooks } from "../../redux/planning/planningSelectors";
import Chart from "../Chart/Chart";
import Timers from "../Timers/Timers";
import TableWithCheckBox from "../Table/TableWithCheckBox";
import TableWithoutCheckBox from "../Table/TableWithoutCheckBox";
import TrainingForm from "../TrainingForm/TrainingForm";

interface Book {
  author: string;
  pagesFinished: number;
  pagesTotal: number;
  publishYear: number;
  title: string;
  _id: string;
}

const Progress = ({ allBooks }) => {
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [result, setResult] = useState(0);

  const filteredBooks = allBooks.goingToRead.filter(
    (book) => !selectedBooks.some((a) => a._id === book._id)
  );

  const dispatch = useAppDispatch();

  const current = useSelector(planningBooks);

  useEffect(() => {
    dispatch(currentPlanning());
  }, [dispatch]);

  const ssss = dayjs(current.startDate);
  const date = dayjs(current.endDate);

  const today = dayjs();

  let currentDatee: string | null = null;
  let sum = 0;
  const resultArray: number[] = [];

  for (const item of current.stats) {
    const date = item.time.split(" ")[0];

    if (date !== currentDatee) {
      if (currentDatee !== null) {
        resultArray.push(sum);
      }
      currentDatee = date;
      sum = item.pagesCount;
    } else {
      sum += item.pagesCount;
    }
  }

  if (currentDatee !== null) {
    resultArray.push(sum);
  }

  const daysArray: string[] = [];
  let cccccc = ssss;

  while (cccccc.isBefore(date) || cccccc.isSame(date, "day")) {
    daysArray.push(cccccc.format("YYYY-MM-DD"));
    cccccc = cccccc.add(1, "day");
  }

  const numbersArray: number[] = [];

  if (current.pagesPerDay !== null) {
    for (let i = 0; i < daysArray.length; i++) {
      numbersArray.push(current.pagesPerDay * (i + 1));
    }
  }

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
      (book) => book._id === selected
    );
    setSelectedBooks((prevSelectedBooks) => [
      ...prevSelectedBooks,
      selectedBook as Book,
    ]);
    return;
  };

  const handleStartTraining = () => {
    const bookIds = selectedBooks.map((book) => book._id);

    dispatch(
      startPlanning({
        startDate: dayjs(startDate).format("YYYY-MM-DD"),
        endDate: dayjs(finishDate).format("YYYY-MM-DD"),
        books: bookIds,
      })
    );
  };

  const deleteFromSelected = (id) => {
    setSelectedBooks((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <>
      <SectionWrapper>
        {current.books.length > 0 ? (
          <BigElement>
            <Timers date={date} />
            <TableWithCheckBox current={current} />
          </BigElement>
        ) : (
          <BigElement>
            <TitleWrapper>
              <MainTitle>My training</MainTitle>
            </TitleWrapper>
            <TrainingForm
              filteredBooks={filteredBooks}
              handleFormSubmit={handleFormSubmit}
              handleStartDateChange={handleStartDateChange}
              handleFinishDateChange={handleFinishDateChange}
              setSelected={setSelected}
              selected={selected}
            />
            <TableWithoutCheckBox
              selectedBooks={selectedBooks}
              deleteFromSelected={deleteFromSelected}
            />
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
                <CountNumber>
                  {current.books.length || selectedBooks.length}
                </CountNumber>
              </CountWrapper>
              <BoxName>Amount of books</BoxName>
            </div>
            <div>
              <CountWrapper>
                <CountNumber>
                  {startDate || finishDate
                    ? isNaN(dayjs(finishDate).diff(dayjs(startDate), "day"))
                      ? 0
                      : dayjs(finishDate).diff(dayjs(startDate), "day")
                    : isNaN(date.diff(ssss, "day"))
                    ? 0
                    : date.diff(ssss, "day")}
                </CountNumber>
              </CountWrapper>

              <BoxName>Amount of days</BoxName>
            </div>
            {current.books.length > 0 && (
              <div>
                <CountWrapper>
                  <CountNumber>{current.books.length}</CountNumber>
                </CountWrapper>

                <BoxName>Books left</BoxName>
              </div>
            )}
          </CountBackground>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Chart
          labels={daysArray}
          startPages={resultArray}
          progressExpectetion={numbersArray}
        />
        <div>
          {current.books.length > 0 && (
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
                <label>
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
                </label>
                <label>
                  Amount of pages
                  <input
                    type="text"
                    onChange={(event) => {
                      setResult(Number(event.target.value));
                    }}
                  />
                </label>
                <AddResultButton>Add result</AddResultButton>
              </form>
              <StatisticsTitle>Statistics</StatisticsTitle>
              <ul>
                {current.stats.map((stat) => (
                  <StatTimeListItem key={new Date().getTime()}>
                    <p>{stat.time.split(" ")[0]}</p>
                    <p>{stat.time.split(" ")[1]}</p>
                    <p>{stat.pagesCount} pages</p>
                  </StatTimeListItem>
                ))}
              </ul>
            </ResultsWrapper>
          )}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Progress;
