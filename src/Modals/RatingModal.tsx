import { useSelector } from "react-redux";
import { addReview, deleteBook } from "../redux/books/booksOperations";
import { useAppDispatch } from "../redux/store";
import {
  ButtonsWrapper,
  Label,
  OrangeResumeButton,
  ResumeContent,
  ResumeTitle,
  StarsWrapper,
  StyledRating,
  TextArea,
  WhiteResumeButton,
  Wrap,
} from "./Modals.styled";
import { useState } from "react";
import { selectIsLoading } from "../redux/books/booksSelectors";

const RatingModal = ({ id, handleClose, rootRef }) => {
  const [rating, setRating] = useState<number | null>(0);
  const [feedback, setFeedback] = useState("");

  const dispatch = useAppDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addReview({ rating, feedback, id })).finally(() =>
      handleClose(event)
    );
  };

  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrap ref={rootRef}>
      <ResumeContent>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <StarsWrapper>
            <ResumeTitle>Choose rating of the book</ResumeTitle>
            <StyledRating
              name="simple-controlled"
              value={rating}
              onChange={(_, newValue) => {
                setRating(newValue);
              }}
            />
          </StarsWrapper>
          <Label>
            Resume
            <TextArea
              name="feedback"
              placeholder="..."
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
            />
          </Label>

          <ButtonsWrapper>
            <WhiteResumeButton type="button" onClick={handleClose}>
              Back
            </WhiteResumeButton>
            <OrangeResumeButton type="submit">
              {isLoading ? "Loading" : "Save"}
            </OrangeResumeButton>
            <WhiteResumeButton
              type="button"
              onClick={(event) => {
                dispatch(deleteBook(id));
                handleClose(event);
              }}
            >
              {isLoading ? "Loading" : "Delete book"}
            </WhiteResumeButton>
          </ButtonsWrapper>
        </form>
      </ResumeContent>
    </Wrap>
  );
};

export default RatingModal;
