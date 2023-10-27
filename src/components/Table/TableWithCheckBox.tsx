import { ListItem } from "@mui/material";
import {
  ListHeaderText,
  ListHeaderWrapper,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";
import icons from "../../images/icons.svg";

const TableWithCheckBox = ({ current }) => {
  return (
    <>
      <ListHeaderWrapper>
        <ListHeaderText>Book title</ListHeaderText>
        <ListHeaderText>Author</ListHeaderText>
        <ListHeaderText>Year</ListHeaderText>
        <ListHeaderText>Pages</ListHeaderText>
      </ListHeaderWrapper>
      <SelectedBooksList>
        {current.books.map((book) => (
          <ListItem key={book._id}>
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
            <SelectedBookTitle>{book.author}</SelectedBookTitle>
            <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
            <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
          </ListItem>
        ))}
      </SelectedBooksList>
    </>
  );
};

export default TableWithCheckBox;
