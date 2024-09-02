import { FC, HTMLAttributes } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose, open, children }) => {
  return (
    <div
      onClick={onClose}
      className={`modal w-full h-full fixed bg-black/50 top-0 z-10   transition-all duration-300 ease-in-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {open && <div onClick={(e) => e.stopPropagation()}>{children}</div>}
    </div>
  );
};

export default Modal;
