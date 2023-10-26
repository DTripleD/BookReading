import {
  DeleteButton,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";
import icons from "../../images/icons.svg";

const TableWithoutCheckBox = ({ selectedBooks, deleteFromSelected }) => {
  return (
    <>
      <ListHeaderWrapper>
        <ListHeaderText>Book title</ListHeaderText>
        <ListHeaderText>Author</ListHeaderText>
        <ListHeaderText>Year</ListHeaderText>
        <ListHeaderText>Pages</ListHeaderText>
      </ListHeaderWrapper>
      <SelectedBooksList>
        {selectedBooks.map((book) => (
          <ListItem key={book._id}>
            <svg width="22" height="17">
              <use href={icons + "#icon-book"}></use>
            </svg>
            <SelectedBookTitle>{book.title}</SelectedBookTitle>
            <SelectedBookTitle>{book.author}</SelectedBookTitle>
            <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
            <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
            <DeleteButton onClick={() => deleteFromSelected(book._id)}>
              <svg width="14" height="18">
                <use href={icons + "#icon-delete"}></use>
              </svg>
            </DeleteButton>
          </ListItem>
        ))}
      </SelectedBooksList>
    </>
  );
};

export default TableWithoutCheckBox;
