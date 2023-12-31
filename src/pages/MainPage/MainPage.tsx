import {
  Form,
  Input,
  Label,
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
  MobileDescr,
  MobileDescrWrapper,
  DescrWrapper,
  TextWrapper,
  MarginBottomWrapper,
} from "../../pages/MainPage/MainPage.styled.tsx";
import { useAppDispatch } from "../../redux/store.ts";
import icons from "../../images/icons.svg";
import { useState, useEffect } from "react";
import { addBook, getBooks } from "../../redux/books/booksOperations.ts";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import Instruction from "../../components/Instruction/Instruction.tsx";
import toast from "react-hot-toast";
import MainContainer from "../../components/Container/Container.tsx";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  userBooks,
} from "../../redux/books/booksSelectors.ts";
import Loading from "../../components/Loading/Loading.tsx";

const MainPage = ({ handleModalOpen }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pagesTotal, setPagesTotal] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const allBooks = useSelector(userBooks);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (publishYear.length > 4) {
      return toast.error("Каріна блін!!!!! Введи чотири числа!!!!!!");
    }

    dispatch(
      addBook({
        title,
        author,
        publishYear: Number(publishYear),
        pagesTotal: Number(pagesTotal),
      })
    )
      .then((res) => {
        if (res.payload.response?.status === 400) {
          toast.error(res.payload.response.data.message);
          throw new Error();
        }
      })
      .then(() => {
        setTitle("");
        setAuthor("");
        setPublishYear("");
        setPagesTotal("");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);

  return (
    <MainContainer>
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
            <FormButton type="submit">
              {isLoading ? "Loading" : "Add"}
            </FormButton>
          </Form>
        </MediaQuery>

        {isLoading ? (
          <Loading />
        ) : allBooks.goingToRead.length > 0 ||
          allBooks.finishedReading.length > 0 ||
          allBooks.currentlyReading.length > 0 ? (
          <div>
            {allBooks.finishedReading.length > 0 && (
              <MarginBottomWrapper>
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
                          <DescrWrapper id="rating">
                            <MediaQuery maxWidth={767}>
                              <MobileDescrWrapper>
                                <MobileDescr>Author:</MobileDescr>
                                <MobileDescr>Year:</MobileDescr>
                                <MobileDescr>Pages:</MobileDescr>
                                <MobileDescr>Rating:</MobileDescr>
                              </MobileDescrWrapper>
                            </MediaQuery>
                            <TextWrapper>
                              <ListText id="author-resume">
                                {book.author}
                              </ListText>
                              <ListText id="year-resume">
                                {book.publishYear}
                              </ListText>
                              <ListText id="pages-resume">
                                {book.pagesTotal}
                              </ListText>

                              <StyledRating
                                name="simple-controlled"
                                disabled
                                value={book.rating ? book.rating : 0}
                              />
                            </TextWrapper>
                          </DescrWrapper>
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
              </MarginBottomWrapper>
            )}
            {allBooks.currentlyReading.length > 0 && (
              <MarginBottomWrapper>
                <Title>Reading now</Title>
                <MediaQuery minWidth={768}>
                  <ListTitleWrapper>
                    <ListTitle id="title-title">Book title</ListTitle>
                    <ListTitle id="author-title">Author</ListTitle>
                    <ListTitle id="year-title">Year</ListTitle>
                    <ListTitle id="pages-title">Pages</ListTitle>
                  </ListTitleWrapper>
                </MediaQuery>

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
                          <DescrWrapper>
                            <MediaQuery maxWidth={767}>
                              <MobileDescrWrapper>
                                <MobileDescr>Author:</MobileDescr>
                                <MobileDescr>Year:</MobileDescr>
                                <MobileDescr>Pages:</MobileDescr>
                              </MobileDescrWrapper>
                            </MediaQuery>
                            <TextWrapper>
                              <ListText id="author-list">
                                {book.author}
                              </ListText>
                              <ListText id="year-list">
                                {book.publishYear}
                              </ListText>
                              <ListText id="pages-list">
                                {book.pagesTotal}
                              </ListText>
                            </TextWrapper>
                          </DescrWrapper>
                        </ListItem>
                      );
                    }
                  )}
                </BooksList>
              </MarginBottomWrapper>
            )}
            {allBooks.goingToRead.length > 0 && (
              <div>
                <Title>Going to read</Title>
                <MediaQuery minWidth={768}>
                  <ListTitleWrapper>
                    <ListTitle id="title-title">Book title</ListTitle>
                    <ListTitle id="author-title">Author</ListTitle>
                    <ListTitle id="year-title">Year</ListTitle>
                    <ListTitle id="pages-title">Pages</ListTitle>
                  </ListTitleWrapper>
                </MediaQuery>
                <BooksList>
                  {allBooks.goingToRead.map(
                    (book: {
                      title: string;
                      author: string;
                      publishYear: number;
                      pagesTotal: number;
                      _id: string;
                    }) => {
                      return (
                        <ListItem key={book._id}>
                          <TitleWrapper>
                            <svg width="22" height="17">
                              <use href={icons + "#icon-book"}></use>
                            </svg>
                            <ListText id="title-list">{book.title}</ListText>
                          </TitleWrapper>
                          <DescrWrapper>
                            <MediaQuery maxWidth={767}>
                              <MobileDescrWrapper>
                                <MobileDescr>Author:</MobileDescr>
                                <MobileDescr>Year:</MobileDescr>
                                <MobileDescr>Pages:</MobileDescr>
                              </MobileDescrWrapper>
                            </MediaQuery>
                            <TextWrapper>
                              <ListText id="author-list">
                                {book.author}
                              </ListText>
                              <ListText id="year-list">
                                {book.publishYear}
                              </ListText>
                              <ListText id="pages-list">
                                {book.pagesTotal}
                              </ListText>
                            </TextWrapper>
                          </DescrWrapper>
                        </ListItem>
                      );
                    }
                  )}
                </BooksList>
              </div>
            )}
            {!allBooks.currentlyReading.length && (
              <TrainingBtn onClick={() => navigate("/progress")}>
                My training
              </TrainingBtn>
            )}
          </div>
        ) : (
          <Instruction />
        )}
        <MediaQuery maxWidth={767}>
          <PlusButton>
            <svg width="16" height="16">
              <use href={icons + "#icon-plus"}></use>
            </svg>
          </PlusButton>
        </MediaQuery>
      </div>
    </MainContainer>
  );
};

export default MainPage;
