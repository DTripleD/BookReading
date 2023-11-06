import {
  BookContainer,
  DeleteButton,
  InfoTitle,
  InfoWrapper,
  ListHeaderText,
  ListHeaderWrapper,
  ListItem,
  PostWrapper,
  PreWrapper,
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
            <BookContainer>
              <SvgWrapper>
                <svg width="22" height="17">
                  <use href={icons + "#icon-book"}></use>
                </svg>
                <SelectedBookTitle>{book.title}</SelectedBookTitle>
              </SvgWrapper>
              <InfoWrapper>
                <MediaQuery maxWidth={767}>
                  <PreWrapper>
                    <InfoTitle>Author:</InfoTitle>
                    <InfoTitle>Year:</InfoTitle>
                    <InfoTitle>Pages:</InfoTitle>
                  </PreWrapper>
                </MediaQuery>
                <PostWrapper>
                  <SelectedBookTitle id="table-author-element-wc">
                    {book.author}
                  </SelectedBookTitle>
                  <SelectedBookTitle id="table-year-element-wc">
                    {book.publishYear}
                  </SelectedBookTitle>
                  <SelectedBookTitle id="table-total-element-wc">
                    {book.pagesTotal}
                  </SelectedBookTitle>
                </PostWrapper>
              </InfoWrapper>
            </BookContainer>
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
