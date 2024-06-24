import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import cn from "@/utils/cn";

type PortalModalProps = {
  showModal: boolean;
  onClickOutside: () => void;
} & PropsWithChildren;

const PortalModal = ({ showModal, onClickOutside, children }: PortalModalProps) => {
  return ReactDOM.createPortal(
    <dialog
      open={showModal}
      className={cn("modal h-full w-full !bg-[#000000b0] backdrop-blur", {
        "modal-open z-[999]": showModal,
      })}
      onClick={onClickOutside}
    >
      {children}
    </dialog>,
    document.getElementById("dialog-root") as Element
  );
};
export default PortalModal;
