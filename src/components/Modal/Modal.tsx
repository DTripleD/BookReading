import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Portal from "../portal/Portal";

import createContainer from "../portal/Container";
import {
  Wrap,
  Content,
  Title,
  WhiteButton,
  OrangeButton,
  TextArea,
  Label,
  ResumeContent,
  ResumeTitle,
  StarsWrapper,
  ButtonsWrapper,
  OrangeResumeButton,
  WhiteResumeButton,
  StyledRating,
} from "./Modal.styled";
import icons from "../../images/icons.svg";
import { useAppDispatch } from "../../redux/store";
import { addReview } from "../../redux/books/booksOperations";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  id: string;
  onClose?: () => void;
};

const Modal = (props: Props) => {
  const { onClose, id } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);
  const [rating, setRating] = useState<number | null>(0);
  const [feedback, setFeedback] = useState("");

  const dispatch = useAppDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addReview({ rating, feedback, id })).finally(() =>
      handleClose(event)
    );
  };

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      onClose?.();
    }, [onClose]);

  if (id === "1") {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <Wrap ref={rootRef} data-testid="wrap">
          <Content>
            <Title>
              The changes you made will be lost if you navigate away from this
              application
            </Title>
            <WhiteButton
              type="button"
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              Cancel
            </WhiteButton>
            <OrangeButton
              type="button"
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              Leave this app
            </OrangeButton>
          </Content>
        </Wrap>
      </Portal>
    ) : null;
  } else if (id === "2") {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <Wrap ref={rootRef} data-testid="wrap">
          <Content>
            <svg width="54" height="54">
              <use href={icons + "#icon-thumb_up-no_color"}></use>
            </svg>
            <Title>
              Well done! but you need to be a little bit faster. You can do it)
            </Title>
            <OrangeButton
              type="button"
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              New training
            </OrangeButton>
            <WhiteButton
              type="button"
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              Back
            </WhiteButton>
          </Content>
        </Wrap>
      </Portal>
    ) : null;
  } else if (id === "3") {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <Wrap ref={rootRef} data-testid="wrap">
          <Content>
            <svg width="54" height="54">
              <use href={icons + "#icon-thumb_up_orange"}></use>
            </svg>
            <Title>Congratulations! Another book read.</Title>
            <OrangeButton
              type="button"
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              Done
            </OrangeButton>
          </Content>
        </Wrap>
      </Portal>
    ) : null;
  } else {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
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
                <OrangeResumeButton
                  type="submit"
                  data-testid="modal-close-button"
                >
                  Save
                </OrangeResumeButton>
              </ButtonsWrapper>
            </form>
          </ResumeContent>
        </Wrap>
      </Portal>
    ) : null;
  }
};

export default Modal;
