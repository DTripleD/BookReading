import { useSelector } from "react-redux";
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
} from "./Main.styled.tsx";
import { useAppDispatch } from "../../redux/store.ts";

import { useEffect, useState } from "react";
import { addBook, getBooks } from "../../redux/books/booksOperations.ts";
import { userBooks } from "../../redux/books/booksSelectors.ts";

const Main = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pagesTotal, setPagesTotal] = useState("");

  const allBooks = useSelector(userBooks);
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
    );
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <Form onSubmit={(event) => handleFormSubmit(event)}>
        <FormWrapper>
          <Label>
            Book title
            <Input
              id="title"
              type="text"
              placeholder="..."
              onChange={(event) => setTitle(event.target.value)}
            />
          </Label>
          <Label>
            Author
            <Input
              id="author"
              type="text"
              placeholder="..."
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Label>
          <Label>
            Publication date
            <Input
              id="date"
              type="text"
              placeholder="..."
              onChange={(event) => setPublishYear(event.target.value)}
            />
          </Label>
          <Label>
            Amount of pages
            <Input
              id="pages"
              type="text"
              placeholder="..."
              onChange={(event) => setPagesTotal(event.target.value)}
            />
          </Label>
        </FormWrapper>
        <FormButton type="submit">Add</FormButton>
      </Form>

      {allBooks.goingToRead.lenght === 0 ? (
        <Instruction>
          <StepsNum>Step 1.</StepsNum>
          <StepsDo>Create your own library</StepsDo>
          <StepsResult>
            Add there books which you are going to read.
          </StepsResult>
          <StepsNum>Step 2.</StepsNum>
          <StepsDo>Create your first training</StepsDo>
          <StepsResult>Set a goal, choose period, start training.</StepsResult>
        </Instruction>
      ) : (
        <div>
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
          <TrainingBtn>My training</TrainingBtn>
        </div>
      )}
    </>
  );
};

export default Main;
