import icons from "../images/icons.svg";
import { Content, OrangeButton, Title, Wrap } from "./Modals.styled";

const CongratulationsModal = ({ handleClose, rootRef }) => {
  return (
    <Wrap ref={rootRef}>
      <Content>
        <svg width="54" height="54">
          <use href={icons + "#icon-thumb_up_orange"}></use>
        </svg>
        <Title>Congratulations! Another book read.</Title>
        <OrangeButton type="button" onClick={handleClose}>
          Done
        </OrangeButton>
      </Content>
    </Wrap>
  );
};

export default CongratulationsModal;
