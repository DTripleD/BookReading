import { useSelector } from "react-redux";
import {
  AddButton,
  BoxName,
  CountBackground,
  CountNumber,
  CountWrapper,
  DateInput,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  ProgressWrapper,
  SelectedBookTitle,
  StartButton,
  MainTitle,
  TitleWrapper,
  LineWrapper,
  LineUpperText,
  TrainingWrapper,
} from "./Progress.styled";
import { userBooks } from "../../redux/books/booksSelectors";
import { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  cubicInterpolationMode: "monotone",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const startPages = [5, 10, 45, 1, 3, 5, 6];

const progressExpectetion = [5, 10, 15, 20, 25, 30, 35];

const data = {
  labels,
  datasets: [
    {
      label: "plan",
      data: startPages,
      borderColor: "#FF6B08",
      backgroundColor: "#FF6B08",
    },
    {
      label: "fact",
      data: progressExpectetion,
      borderColor: "#091E3F",
      backgroundColor: "#091E3F",
    },
  ],
};

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
  const [selectedBook, setSelectedBook] = useState({});

  const allBooks = useSelector(userBooks);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSelectedBooks((prevSelectedBooks) => [
      ...prevSelectedBooks,
      selectedBook as Book,
    ]);
    return;
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBookTitle = event.target.value;
    const selectedBook = allBooks.goingToRead.find(
      (book: Book) => book.title === selectedBookTitle
    );
    setSelectedBook(selectedBook);
  };

  return (
    <>
      <ProgressWrapper>
        <TrainingWrapper>
          <TitleWrapper>
            <MainTitle>My training</MainTitle>
          </TitleWrapper>
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <div>
              <DateInput type="date" placeholder="start" />
              <DateInput type="date" />
            </div>
            <select
              id="select"
              placeholder="Choose books from the library "
              onChange={(event) => handleSelectChange(event)}
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
                  <option key={book._id} value={book.title}>
                    {book.title}
                  </option>
                )
              )}
            </select>
            <AddButton type="submit">Add</AddButton>
          </form>
          <ul>
            <ListHeaderWrapper>
              <ListHeaderText>Book title</ListHeaderText>
              <ListHeaderText>Author</ListHeaderText>
              <ListHeaderText>Year</ListHeaderText>
              <ListHeaderText>Pages</ListHeaderText>
            </ListHeaderWrapper>
            {selectedBooks.map((book) => (
              <ListItem key={book._id}>
                <SelectedBookTitle>{book.title}</SelectedBookTitle>
                <SelectedBookTitle>{book.author}</SelectedBookTitle>
                <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
                <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
              </ListItem>
            ))}
          </ul>
          <StartButton>Start traning</StartButton>
          <LineWrapper>
            <LineUpperText>Amont of pages / DAY</LineUpperText>
            <Line options={options} data={data} />
          </LineWrapper>
        </TrainingWrapper>
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
                <CountNumber>0</CountNumber>
              </CountWrapper>

              <BoxName>Amount of days</BoxName>
            </div>
          </CountBackground>
        </div>
      </ProgressWrapper>
    </>
  );
};

export default Progress;
