const Modal = ({
  title,
  children,
  isOpen,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-base-900/10 backdrop-blur-xl dark:bg-base-0/10"
          id="backdrop"
        >
          <div className="min-w-[700px] rounded-xl bg-base-0 p-7 shadow-md dark:bg-base-900">
            <div className="mb-4 flex items-center justify-between border-b border-base-700 pb-4">
              <h3 className="text-green-bright">{title}</h3>
              <button onClick={onClose} className="btn -mr-5 text-base-100">
                <svg
                  className="fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
