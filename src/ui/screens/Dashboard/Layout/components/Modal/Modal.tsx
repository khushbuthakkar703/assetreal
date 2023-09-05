import React, { useState, useCallback } from "react";

import * as styled from "./Modal.styled";
import { useEffect } from "react";
import { Nullable } from "../../../../../../utils/@types";

export type ModalProps = {
  height?: number | string;
  title: string;
  width?: number | string;
  containerPin?: boolean;
  contentBottomPadding?: boolean;
  position?: "center" | "left" | "right";
  hideFooterSplitter?: boolean;
  visible?: boolean;
  hide?: boolean;
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  onClose?: Nullable<() => void>;
};

type FCModal = React.FC<ModalProps> & {
  SecondaryButton: typeof styled.SecondaryButton;
};

const Modal: FCModal = ({
  height,
  width,
  children,
  containerPin,
  contentBottomPadding,
  position = "center",
  title,
  visible,
  header,
  footer,
  hide,
  hideFooterSplitter = false,
  onClose,
}) => {
  const close = useCallback(() => onClose && onClose(), [onClose]);
  const [pos, setPos] = useState<"left" | "right">();

  const getPosition = useCallback(
    (el) => {
      if (!containerPin) return;
      if (!el) return;
      const right = parseInt(el.getBoundingClientRect()?.right + "") || 0;
      const width = window.outerWidth;
      setPos(width / 2 > right ? "right" : "left");
    },
    [containerPin]
  );

  useEffect(() => {
    const handleDown = (evt: KeyboardEvent) => {
      if (evt.code === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleDown);

    return () => {
      document.removeEventListener("keydown", handleDown);
    };
  }, []);

  return (
    <styled.RelativeWrapper data-visible={visible}>
      <styled.BodyWrapper
        position={position}
        ref={getPosition}
        data-visible={visible}
        data-pos={pos}
        data-pin={containerPin ?? false}
      >
        <styled.DialogWrapper
          data-visible={visible}
          height={height}
          width={width}
        >
          {header ? (
            <styled.CustomHeader>
              {header}
              <styled.CustomCloseButton>
                <button onClick={close}>X</button>
              </styled.CustomCloseButton>
            </styled.CustomHeader>
          ) : (
            <styled.Header>
              <styled.Title children={title} />
              {!hide && <button onClick={close}>X</button>}
            </styled.Header>
          )}
          <styled.Content data-bottom-space={contentBottomPadding ?? false}>
            {children}
          </styled.Content>
          {footer && (
            <styled.Footer
              data-hide-splitter={hideFooterSplitter}
              children={footer}
            />
          )}
        </styled.DialogWrapper>
      </styled.BodyWrapper>
    </styled.RelativeWrapper>
  );
};

Modal.SecondaryButton = styled.SecondaryButton;

export default Modal;
export { Modal };
