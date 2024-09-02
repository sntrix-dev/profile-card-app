import { FC, HTMLAttributes } from "react";
import { CloseIcon } from "../Icons";

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
      {open && (
        <button
          className="text-white absolute top-2 right-2 p-1 rounded-full z-20 bg-[#636366]"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      )}
      {open && <div onClick={(e) => e.stopPropagation()}>{children}</div>}
    </div>
  );
};

export default Modal;
