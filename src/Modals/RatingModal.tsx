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

  return (
    <Wrap ref={rootRef} data-testid="wrap">
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
            <OrangeResumeButton type="submit" data-testid="modal-close-button">
              Save
            </OrangeResumeButton>
            <WhiteResumeButton
              type="button"
              onClick={(event) => {
                dispatch(deleteBook(id));
                handleClose(event);
              }}
            >
              Delete book
            </WhiteResumeButton>
          </ButtonsWrapper>
        </form>
      </ResumeContent>
    </Wrap>
  );
};

export default RatingModal;
