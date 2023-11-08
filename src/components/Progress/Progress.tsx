import { useSelector } from "react-redux";
import {
  BoxName,
  CountBackground,
  CountNumber,
  CountWrapper,
  StartButton,
  MainTitle,
  TitleWrapper,
  NumbersWrapper,
  ChartResultWrapper,
  DescWrapper,
  WrapperForTimersDesc,
  WrapperWithoutTimer,
} from "./Progress.styled";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useAppDispatch } from "../../redux/store";
import {
  currentPlanning,
  startPlanning,
} from "../../redux/planning/planningOperations";
import { planningBooks } from "../../redux/planning/planningSelectors";
import Chart from "../Chart/Chart";
import Timers from "../Timers/Timers";
import TableWithCheckBox from "../Table/TableWithCheckBox";
import TableWithoutCheckBox from "../Table/TableWithoutCheckBox";
import TrainingForm from "../TrainingForm/TrainingForm";
import MediaQuery from "react-responsive";

import Result from "../Results/Result";

interface Book {
  author: string;
  pagesFinished: number;
  pagesTotal: number;
  publishYear: number;
  title: string;
  _id: string;
}

const Progress = ({ allBooks, handleModalOpen }) => {
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const filteredBooks = allBooks.goingToRead.filter(
    (book) => !selectedBooks.some((a) => a._id === book._id)
  );

  const dispatch = useAppDispatch();

  const current = useSelector(planningBooks);

  const isFinish = (trainingBooks) => {
    if (!trainingBooks.length) {
      return false;
    }

    const { pagesFinished, pagesTotal } =
      trainingBooks[trainingBooks.length - 1];

    if (pagesFinished === pagesTotal) {
      handleModalOpen("3");
      return true;
    }
  };

  useEffect(() => {
    if (current.books.length) {
      isFinish(current.books);
    }
  }, [current]);

  const booksLeft = () => {
    let books = current.books.length;

    current.books.map((book) => {
      if (book.pagesTotal === book.pagesFinished) {
        books -= 1;
      }
    });
    return books;
  };

  useEffect(() => {
    dispatch(currentPlanning());
  }, [dispatch]);

  const pagesPerDayCalc = () => {
    const date1 = dayjs(startDate);
    const date2 = dayjs(finishDate);
    const diffInDays = date2.diff(date1, "day");
    let sumOfPages = 0;
    selectedBooks.map((book) => (sumOfPages += book.pagesTotal));
    return Math.ceil(sumOfPages / diffInDays);
  };

  const perDay = pagesPerDayCalc();

  const startDateForChart = dayjs(current.startDate || startDate);
  const date = dayjs(current.endDate || finishDate);

  const daysArray: string[] = [];
  let cccccc = startDateForChart;

  while (cccccc.isBefore(date) || cccccc.isSame(date, "day")) {
    daysArray.push(cccccc.format("YYYY-MM-DD"));
    cccccc = cccccc.add(1, "day");
  }

  const numbersArray: number[] = [];

  for (let i = 0; i < daysArray.length; i++) {
    current.pagesPerDay !== null
      ? numbersArray.push(current.pagesPerDay * i)
      : numbersArray.push(perDay * i);
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
      <DescWrapper className={current.books.length > 0 ? "isTrain" : ""}>
        {current.books.length > 0 ? (
          <WrapperForTimersDesc>
            <Timers date={date} />
            <MediaQuery minWidth={1280}>
              <TableWithCheckBox current={current} />
            </MediaQuery>
          </WrapperForTimersDesc>
        ) : (
          <WrapperWithoutTimer>
            {/* <button onClick={() => handleModalOpen("1")}>Aaaa</button>
            <button onClick={() => handleModalOpen("2")}>BBBB</button> */}
            <TitleWrapper id="training">
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
          </WrapperWithoutTimer>
        )}
        <div>
          <MediaQuery maxWidth={767}>
            <TitleWrapper id="goals">
              <MainTitle>My goals</MainTitle>
            </TitleWrapper>
          </MediaQuery>
          <MediaQuery minWidth={1280}>
            <TitleWrapper id="goals">
              <MainTitle>My goals</MainTitle>
            </TitleWrapper>
          </MediaQuery>
          <CountBackground
            className={current.books.length > 0 ? "isTrain" : ""}
          >
            <MediaQuery minWidth={768} maxWidth={1280}>
              <TitleWrapper id="tablet">
                <MainTitle>My goals</MainTitle>
              </TitleWrapper>
            </MediaQuery>

            <NumbersWrapper
              className={current.books.length > 0 ? "isTrain" : ""}
            >
              <div>
                <CountWrapper
                  className={current.books.length > 0 ? "isTrain" : ""}
                >
                  <CountNumber
                    className={current.books.length > 0 ? "isTrain" : ""}
                  >
                    {current.books.length || selectedBooks.length}
                  </CountNumber>
                </CountWrapper>
                <BoxName className={current.books.length > 0 ? "isTrain" : ""}>
                  Amount of books
                </BoxName>
              </div>
              <div>
                <CountWrapper
                  className={current.books.length > 0 ? "isTrain" : ""}
                >
                  <CountNumber
                    className={current.books.length > 0 ? "isTrain" : ""}
                  >
                    {startDate || finishDate
                      ? isNaN(dayjs(finishDate).diff(dayjs(startDate), "day"))
                        ? 0
                        : dayjs(finishDate).diff(dayjs(startDate), "day")
                      : isNaN(date.diff(startDateForChart, "day"))
                      ? 0
                      : date.diff(startDateForChart, "day")}
                  </CountNumber>
                </CountWrapper>

                <BoxName className={current.books.length > 0 ? "isTrain" : ""}>
                  Amount of days
                </BoxName>
              </div>
              {current.books.length > 0 && (
                <div>
                  <CountWrapper
                    className={current.books.length > 0 ? "isTrain" : ""}
                  >
                    <CountNumber
                      id="left"
                      className={current.books.length > 0 ? "isTrain" : ""}
                    >
                      {booksLeft()}
                    </CountNumber>
                  </CountWrapper>

                  <BoxName
                    className={current.books.length > 0 ? "isTrain" : ""}
                  >
                    Books left
                  </BoxName>
                </div>
              )}
            </NumbersWrapper>
          </CountBackground>
        </div>
      </DescWrapper>
      <MediaQuery maxWidth={1279}>
        {current.books.length > 0 && <TableWithCheckBox current={current} />}
      </MediaQuery>

      <ChartResultWrapper>
        <Chart
          perDay={perDay}
          labels={daysArray}
          progressExpectetion={numbersArray}
          current={current}
        />
        {current.books.length > 0 && <Result current={current} />}
      </ChartResultWrapper>
    </>
  );
};

export default Progress;
