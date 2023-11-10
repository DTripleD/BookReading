import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Portal from "../portal/Portal";
import createContainer from "../portal/Container";
import EndTimeModal from "../../Modals/EndTimeModal";
import IfNavigateModal from "../../Modals/IfNavigateModal";
import RatingModal from "../../Modals/RatingModal";
import CongratulationsModal from "../../Modals/CongratulationsModal";
import { Props } from "../../types/types";
import MainContainer from "../Container/Container";

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = (props: Props) => {
  const { onClose, id } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

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
        <IfNavigateModal handleClose={handleClose} rootRef={rootRef} />
      </Portal>
    ) : null;
  } else if (id === "2") {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <EndTimeModal handleClose={handleClose} rootRef={rootRef} />
      </Portal>
    ) : null;
  } else if (id === "3") {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <CongratulationsModal handleClose={handleClose} rootRef={rootRef} />
      </Portal>
    ) : null;
  } else {
    return isMounted ? (
      <Portal id={MODAL_CONTAINER_ID}>
        <MainContainer>
          <RatingModal id={id} handleClose={handleClose} rootRef={rootRef} />
        </MainContainer>
      </Portal>
    ) : null;
  }
};

export default Modal;
