import MediaQuery from "react-responsive";
import {
  ButtonsWrapper,
  IfNavigateContent,
  OrangeButtonNavigate,
  Title,
  WhiteButtonNavigate,
  Wrap,
} from "./Modals.styled";

const IfNavigateModal = ({ handleClose, rootRef }) => {
  return (
    <Wrap ref={rootRef} id="navigate-wrapper">
      <IfNavigateContent>
        <Title id="navigate">
          The changes you made will be lost if you navigate away from this
          application
        </Title>
        <ButtonsWrapper>
          <WhiteButtonNavigate type="button" onClick={handleClose}>
            Cancel
          </WhiteButtonNavigate>
          <MediaQuery maxWidth={767}>
            <OrangeButtonNavigate type="button" onClick={handleClose}>
              Leave
            </OrangeButtonNavigate>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <OrangeButtonNavigate type="button" onClick={handleClose}>
              Leave this app
            </OrangeButtonNavigate>
          </MediaQuery>
        </ButtonsWrapper>
      </IfNavigateContent>
    </Wrap>
  );
};

export default IfNavigateModal;
