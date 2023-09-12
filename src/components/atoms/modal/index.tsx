import React from "react";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  modalTitle?: string;
  bodyWrapClassName?: string;
  modalClassName?: string;
  stepCount?: number;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    open,
    setOpen,
    children,
    modalTitle,
    bodyWrapClassName,
    modalClassName,
    stepCount,
  } = props;

  return (
    <>
      {open ? (
        <>
          <div
            className={`fixed inset-0 z-50 flex justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none ${modalClassName}`}
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative m-auto w-full max-w-[577px]"
            >
              {/*content*/}
              <div
                className={`focus:outline-nones relative flex w-full flex-col rounded-[10px] border bg-white p-8 shadow-lg outline-none ${bodyWrapClassName}`}
              >
                {/* header */}
                {modalTitle && (
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl text-[#182021]">{modalTitle}</h3>

                    {stepCount && (
                      <p className="text-base text-[#182021]">
                        Step {stepCount}
                      </p>
                    )}
                  </div>
                )}
                {/*body*/}
                {children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-zinc-300 opacity-80"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
