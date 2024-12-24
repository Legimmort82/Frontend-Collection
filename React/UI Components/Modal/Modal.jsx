import { HiOutlineX } from "react-icons/hi";
import { createPortal } from "react-dom";
import useOutsideClick from "@/hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div className="fixed top-0 left-0 z-50 w-full h-screen backdrop-blur-sm bg-secondary-800 bg-opacity-30">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-2 mb-6 border-b border-b-secondary-300">
            <p className="font-bold text-secondary-700">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}
export default Modal;
