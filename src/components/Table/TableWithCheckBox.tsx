import { ListItem } from "@mui/material";
import {
  ListHeaderText,
  ListHeaderWrapper,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";

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
            <input type="checkbox" onClick={() => console.log(book._id)} />
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
