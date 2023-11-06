import {
  CheckBoxWrapper,
  InfoTitle,
  InfoWrapper,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  PostWrapper,
  PreWrapper,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";
import icons from "../../images/icons.svg";
import MediaQuery from "react-responsive";

const TableWithCheckBox = ({ current }) => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <ListHeaderWrapper>
          <ListHeaderText id="table-title">Book title</ListHeaderText>
          <ListHeaderText id="table-author">Author</ListHeaderText>
          <ListHeaderText id="table-year">Year</ListHeaderText>
          <ListHeaderText id="table-pages">Pages</ListHeaderText>
        </ListHeaderWrapper>
      </MediaQuery>
      <SelectedBooksList>
        {current.books.map((book) => (
          <ListItem key={book._id}>
            <CheckBoxWrapper id="table-title-element">
              {book.pagesTotal === book.pagesFinished ? (
                <svg width="15" height="15">
                  <use href={icons + "#icon-checkbox"}></use>
                </svg>
              ) : (
                <svg width="15" height="17">
                  <use href={icons + "#icon-checkbox-checked"}></use>
                </svg>
              )}
              <SelectedBookTitle>{book.title}</SelectedBookTitle>
            </CheckBoxWrapper>
            <InfoWrapper>
              <MediaQuery maxWidth={767}>
                <PreWrapper>
                  <InfoTitle>Author:</InfoTitle>
                  <InfoTitle>Year:</InfoTitle>
                  <InfoTitle>Pages:</InfoTitle>
                </PreWrapper>
              </MediaQuery>
              <PostWrapper>
                <SelectedBookTitle id="table-author-element">
                  {book.author}
                </SelectedBookTitle>
                <SelectedBookTitle id="table-year-element">
                  {book.publishYear}
                </SelectedBookTitle>
                <SelectedBookTitle id="table-total-element">
                  {book.pagesTotal}
                </SelectedBookTitle>
              </PostWrapper>
            </InfoWrapper>
          </ListItem>
        ))}
      </SelectedBooksList>
    </>
  );
};

export default TableWithCheckBox;
