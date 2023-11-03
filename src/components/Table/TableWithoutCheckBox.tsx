import {
  DeleteButton,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  SelectedBookTitle,
  SelectedBooksList,
  SvgWrapper,
} from "./Table.styled";
import icons from "../../images/icons.svg";
import MediaQuery from "react-responsive";

const TableWithoutCheckBox = ({ selectedBooks, deleteFromSelected }) => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <ListHeaderWrapper>
          <ListHeaderText id="table-title-wc">Book title</ListHeaderText>
          <ListHeaderText id="table-author-wc">Author</ListHeaderText>
          <ListHeaderText id="table-year-wc">Year</ListHeaderText>
          <ListHeaderText id="table-pages-wc">Pages</ListHeaderText>
        </ListHeaderWrapper>
      </MediaQuery>
      <SelectedBooksList>
        {selectedBooks.map((book) => (
          <ListItem key={book._id}>
            <SvgWrapper id="table-title-element-wc">
              <svg width="22" height="17">
                <use href={icons + "#icon-book"}></use>
              </svg>
              <SelectedBookTitle>{book.title}</SelectedBookTitle>
            </SvgWrapper>
            <SelectedBookTitle id="table-author-element-wc">
              {book.author}
            </SelectedBookTitle>
            <SelectedBookTitle id="table-year-element-wc">
              {book.publishYear}
            </SelectedBookTitle>
            <SelectedBookTitle id="table-total-element-wc">
              {book.pagesTotal}
            </SelectedBookTitle>
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
