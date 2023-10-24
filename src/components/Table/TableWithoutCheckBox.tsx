import {
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  SelectedBookTitle,
  SelectedBooksList,
} from "./Table.styled";

const TableWithoutCheckBox = ({ selectedBooks }) => {
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
            <p>i</p>
            <SelectedBookTitle>{book.title}</SelectedBookTitle>
            <SelectedBookTitle>{book.author}</SelectedBookTitle>
            <SelectedBookTitle>{book.publishYear}</SelectedBookTitle>
            <SelectedBookTitle>{book.pagesTotal}</SelectedBookTitle>
            <button>d</button>
          </ListItem>
        ))}
      </SelectedBooksList>
    </>
  );
};

export default TableWithoutCheckBox;
