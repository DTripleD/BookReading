import {
  EndTimeButtonWrapper,
  EndTimeContent,
  EndTimeOrangeButton,
  EndTimeWhiteButton,
  Title,
  Wrap,
} from "./Modals.styled";
import icons from "../images/icons.svg";

const EndTimeModal = ({ handleClose, rootRef }) => {
  return (
    <Wrap ref={rootRef}>
      <EndTimeContent>
        <svg width="54" height="54">
          <use href={icons + "#icon-thumb_up-no_color"}></use>
        </svg>
        <Title id="end-time">
          Well done! <br />
          but you need to be a little bit faster. You can do it)
        </Title>
        <EndTimeButtonWrapper>
          <EndTimeOrangeButton type="button" onClick={handleClose}>
            New training
          </EndTimeOrangeButton>
          <EndTimeWhiteButton type="button" onClick={handleClose}>
            Back
          </EndTimeWhiteButton>
        </EndTimeButtonWrapper>
      </EndTimeContent>
    </Wrap>
  );
};

export default EndTimeModal;
