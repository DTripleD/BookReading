import {
  Form,
  Input,
  Instruction,
  Label,
  StepsDo,
  StepsNum,
  StepsResult,
  ListTitle,
  Title,
  ListTitleWrapper,
  ListItem,
  ListText,
  BooksList,
  FormButton,
  FormWrapper,
  TrainingBtn,
  ResumeButton,
} from "./Main.styled.tsx";
import { useAppDispatch } from "../../redux/store.ts";
import icons from "../../images/icons.svg";
import { useState } from "react";
import { addBook } from "../../redux/books/booksOperations.ts";
import { useNavigate } from "react-router-dom";

const Main = ({ allBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pagesTotal, setPagesTotal] = useState("");

  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        publishYear: Number(publishYear),
        pagesTotal: Number(pagesTotal),
      })
    ).then(() => {
      setTitle("");
      setAuthor("");
      setPublishYear("");
      setPagesTotal("");
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <Form onSubmit={(event) => handleFormSubmit(event)}>
        <FormWrapper>
          <Label>
            Book title
            <Input
              id="title"
              type="text"
              value={title}
              placeholder="..."
              onChange={(event) => setTitle(event.target.value)}
            />
          </Label>
          <Label>
            Author
            <Input
              value={author}
              id="author"
              type="text"
              placeholder="..."
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Label>
          <Label>
            Publication date
            <Input
              value={publishYear}
              id="date"
              type="text"
              placeholder="..."
              onChange={(event) => setPublishYear(event.target.value)}
            />
          </Label>
          <Label>
            Amount of pages
            <Input
              value={pagesTotal}
              id="pages"
              type="text"
              placeholder="..."
              onChange={(event) => setPagesTotal(event.target.value)}
            />
          </Label>
        </FormWrapper>
        <FormButton type="submit">Add</FormButton>
      </Form>
      {/* {allBooks.goingToRead.length > 0 ? ( */}
      <div>
        {allBooks.finishedReading.length > 0 && (
          <div>
            <Title>Already read</Title>
            <ListTitleWrapper>
              <ListTitle>Book title</ListTitle>
              <ListTitle>Author</ListTitle>
              <ListTitle>Year</ListTitle>
              <ListTitle>Pages</ListTitle>
              <ListTitle>Rating</ListTitle>
            </ListTitleWrapper>

            <BooksList>
              {allBooks.finishedReading.map(
                (book: {
                  _id: string;
                  title: string;
                  author: string;
                  publishYear: number;
                  pagesTotal: number;
                }) => {
                  return (
                    <ListItem key={book._id}>
                      <svg width="22" height="17">
                        <use href={icons + "#icon-book"}></use>
                      </svg>
                      <ListText>{book.title}</ListText>
                      <ListText>{book.author}</ListText>
                      <ListText>{book.publishYear}</ListText>
                      <ListText>{book.pagesTotal}</ListText>
                      <p>***</p>
                      <ResumeButton>Resume</ResumeButton>
                    </ListItem>
                  );
                }
              )}
            </BooksList>
          </div>
        )}
        {allBooks.finishedReading.length > 0 && (
          <div>
            <Title>Reading now</Title>

            <ListTitleWrapper>
              <ListTitle>Book title</ListTitle>
              <ListTitle>Author</ListTitle>
              <ListTitle>Year</ListTitle>
              <ListTitle>Pages</ListTitle>
            </ListTitleWrapper>

            <BooksList>
              {allBooks.finishedReading.map(
                (book: {
                  _id: string;
                  title: string;
                  author: string;
                  publishYear: number;
                  pagesTotal: number;
                }) => {
                  return (
                    <ListItem key={book._id}>
                      <svg width="22" height="17">
                        <use href={icons + "#icon-book"}></use>
                      </svg>
                      <ListText>{book.title}</ListText>
                      <ListText>{book.author}</ListText>
                      <ListText>{book.publishYear}</ListText>
                      <ListText>{book.pagesTotal}</ListText>
                    </ListItem>
                  );
                }
              )}
            </BooksList>
          </div>
        )}
        {allBooks.goingToRead.length > 0 && (
          <div>
            <Title>Going to read</Title>

            <ListTitleWrapper>
              <ListTitle>Book title</ListTitle>
              <ListTitle>Author</ListTitle>
              <ListTitle>Year</ListTitle>
              <ListTitle>Pages</ListTitle>
            </ListTitleWrapper>

            <BooksList>
              {allBooks.goingToRead.map(
                (book: {
                  _id: string;
                  title: string;
                  author: string;
                  publishYear: number;
                  pagesTotal: number;
                }) => {
                  return (
                    <ListItem key={book._id}>
                      <svg width="22" height="17">
                        <use href={icons + "#icon-book"}></use>
                      </svg>
                      <ListText>{book.title}</ListText>
                      <ListText>{book.author}</ListText>
                      <ListText>{book.publishYear}</ListText>
                      <ListText>{book.pagesTotal}</ListText>
                    </ListItem>
                  );
                }
              )}
            </BooksList>
          </div>
        )}
        <TrainingBtn onClick={() => navigate("/progress")}>
          My training
        </TrainingBtn>
      </div>
      {/* // ) : (
      //   <Instruction>
      //     <StepsNum>Step 1.</StepsNum>
      //     <StepsDo>Create your own library</StepsDo>
      //     <StepsResult>
      //       Add there books which you are going to read.
      //     </StepsResult>
      //     <StepsNum>Step 2.</StepsNum>
      //     <StepsDo>Create your first training</StepsDo>
      //     <StepsResult>Set a goal, choose period, start training.</StepsResult>
      //   </Instruction>
      // )} */}
    </>
  );
};

export default Main;
