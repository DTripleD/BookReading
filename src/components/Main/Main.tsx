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
  PlusButton,
  TitleWrapper,
  StyledRating,
} from "./Main.styled.tsx";
import { useAppDispatch } from "../../redux/store.ts";
import icons from "../../images/icons.svg";
import { useState } from "react";
import { addBook } from "../../redux/books/booksOperations.ts";
import { useNavigate } from "react-router-dom";

import MediaQuery from "react-responsive";

const Main = ({ allBooks, handleModalOpen }) => {
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
    <div>
      <MediaQuery minWidth={768}>
        <Form onSubmit={(event) => handleFormSubmit(event)}>
          <FormWrapper>
            <Label id="title">
              Book title
              <Input
                type="text"
                value={title}
                placeholder="..."
                onChange={(event) => setTitle(event.target.value)}
              />
            </Label>
            <Label id="author">
              Author
              <Input
                value={author}
                type="text"
                placeholder="..."
                onChange={(event) => setAuthor(event.target.value)}
              />
            </Label>
            <Label id="date">
              Publication date
              <Input
                value={publishYear}
                type="text"
                placeholder="..."
                onChange={(event) => setPublishYear(event.target.value)}
              />
            </Label>
            <Label id="pages">
              Amount of pages
              <Input
                value={pagesTotal}
                type="text"
                placeholder="..."
                onChange={(event) => setPagesTotal(event.target.value)}
              />
            </Label>
          </FormWrapper>
          <FormButton type="submit">Add</FormButton>
        </Form>
      </MediaQuery>

      {allBooks.goingToRead.length > 0 ||
      allBooks.finishedReading.length > 0 ||
      allBooks.currentlyReading > 0 ? (
        <div>
          {allBooks.finishedReading.length > 0 && (
            <div>
              <Title>Already read</Title>
              <MediaQuery minWidth={768}>
                <ListTitleWrapper>
                  <ListTitle id="title-title-rating">Book title</ListTitle>
                  <ListTitle id="author-title-rating">Author</ListTitle>
                  <ListTitle id="year-title-rating">Year</ListTitle>
                  <ListTitle id="pages-title-rating">Pages</ListTitle>
                  <ListTitle id="rating-title-rating">Rating</ListTitle>
                </ListTitleWrapper>
              </MediaQuery>

              <BooksList>
                {allBooks.finishedReading.map(
                  (book: {
                    _id: string;
                    title: string;
                    author: string;
                    publishYear: number;
                    pagesTotal: number;
                    rating: number;
                  }) => {
                    return (
                      <ListItem key={book._id} id="resume">
                        <TitleWrapper id="title-wrapper-resume">
                          <svg width="22" height="17">
                            <use href={icons + "#icon-book"}></use>
                          </svg>
                          <ListText id="title-resume">{book.title}</ListText>
                        </TitleWrapper>
                        <ListText id="author-resume">
                          <MediaQuery maxWidth={767}>
                            <span>Author:</span>
                          </MediaQuery>
                          {book.author}
                        </ListText>
                        <ListText id="year-resume">
                          <MediaQuery maxWidth={767}>
                            <span>Year:</span>
                          </MediaQuery>
                          {book.publishYear}
                        </ListText>
                        <ListText id="pages-resume">
                          <MediaQuery maxWidth={767}>
                            <span>Pages:</span>
                          </MediaQuery>
                          {book.pagesTotal}
                        </ListText>
                        <MediaQuery maxWidth={767}>
                          <span>Rating:</span>
                        </MediaQuery>
                        <StyledRating
                          name="simple-controlled"
                          disabled
                          value={book.rating ? book.rating : 0}
                        />
                        <ResumeButton
                          type="button"
                          onClick={() => {
                            handleModalOpen(book._id);
                          }}
                        >
                          Resume
                        </ResumeButton>
                      </ListItem>
                    );
                  }
                )}
              </BooksList>
            </div>
          )}
          {allBooks.currentlyReading.length > 0 && (
            <div>
              <Title>Reading now</Title>

              <ListTitleWrapper>
                <ListTitle id="title-title">Book title</ListTitle>
                <ListTitle id="author-title">Author</ListTitle>
                <ListTitle id="year-title">Year</ListTitle>
                <ListTitle id="pages-title">Pages</ListTitle>
              </ListTitleWrapper>

              <BooksList>
                {allBooks.currentlyReading.map(
                  (book: {
                    _id: string;
                    title: string;
                    author: string;
                    publishYear: number;
                    pagesTotal: number;
                  }) => {
                    return (
                      <ListItem key={book._id}>
                        <TitleWrapper>
                          <svg width="22" height="17">
                            <use href={icons + "#icon-book"}></use>
                          </svg>
                          <ListText id="title-list">{book.title}</ListText>
                        </TitleWrapper>
                        <ListText id="author-list">{book.author}</ListText>
                        <ListText id="year-list">{book.publishYear}</ListText>
                        <ListText id="pages-list">{book.pagesTotal}</ListText>
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
                <ListTitle id="title-title">Book title</ListTitle>
                <ListTitle id="author-title">Author</ListTitle>
                <ListTitle id="year-title">Year</ListTitle>
                <ListTitle id="pages-title">Pages</ListTitle>
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
                        <TitleWrapper>
                          <svg width="22" height="17">
                            <use href={icons + "#icon-book"}></use>
                          </svg>
                          <ListText id="title-list">{book.title}</ListText>
                        </TitleWrapper>

                        <ListText id="author-list">{book.author}</ListText>
                        <ListText id="year-list">{book.publishYear}</ListText>
                        <ListText id="pages-list">{book.pagesTotal}</ListText>
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
      ) : (
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
      )}
      <MediaQuery maxWidth={767}>
        <PlusButton>
          <svg width="16" height="16">
            <use href={icons + "#icon-plus"}></use>
          </svg>
        </PlusButton>
      </MediaQuery>
    </div>
  );
};

export default Main;
