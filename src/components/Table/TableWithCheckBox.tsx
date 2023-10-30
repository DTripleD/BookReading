import {
  CheckBoxWrapper,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";
import icons from "../../images/icons.svg";

const TableWithCheckBox = ({ current }) => {
  return (
    <>
      <ListHeaderWrapper>
        <ListHeaderText id="title">Book title</ListHeaderText>
        <ListHeaderText id="author">Author</ListHeaderText>
        <ListHeaderText id="year">Year</ListHeaderText>
        <ListHeaderText id="pages">Pages</ListHeaderText>
      </ListHeaderWrapper>
      <SelectedBooksList>
        {current.books.map((book) => (
          <ListItem key={book._id}>
            <CheckBoxWrapper>
              {book.pagesTotal === book.pagesFinished ? (
                <svg width="15" height="15">
                  <use href={icons + "#icon-checkbox"}></use>
                </svg>
              ) : (
                <svg width="15" height="17">
                  <use href={icons + "#icon-checkbox-checked"}></use>
                </svg>
              )}
              <SelectedBookTitle id="title">{book.title}</SelectedBookTitle>
            </CheckBoxWrapper>
            <SelectedBookTitle id="author">{book.author}</SelectedBookTitle>
            <SelectedBookTitle id="year">{book.publishYear}</SelectedBookTitle>
            <SelectedBookTitle id="total">{book.pagesTotal}</SelectedBookTitle>
          </ListItem>
        ))}
      </SelectedBooksList>
    </>
  );
};

export default TableWithCheckBox;
