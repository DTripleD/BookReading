import {
  Content,
  OrangeButton,
  Title,
  WhiteButton,
  Wrap,
} from "./Modals.styled";
import icons from "../images/icons.svg";

const EndTimeModal = ({ handleClose, rootRef }) => {
  return (
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
  );
};

export default EndTimeModal;
