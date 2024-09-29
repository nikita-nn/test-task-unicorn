import { useEffect, useState } from "react";

/**
 * Модальное окно с сообщением об ошибке.
 * @param isOpen - указывает на текущее состояние окна (true - открыто, false - закрыто)
 * @param data - текст ошибки
 * @param closeModal - функция закрытия модального окна
 */

export const ErrorModal = ({
  isOpen = false,
  data,
  closeModal,
}: {
  isOpen: boolean;
  data: string;
  closeModal: () => void;
}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowAnimation(true), 100);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal-bg"></div>
          <div
            className={`modal-content transform transition-all duration-300 ease-in-out ${
              showAnimation ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <h1 className="modal-title">Error</h1>
            <p className={"font-avenir"}>{data}</p>
            <button onClick={closeModal} className={"main-button mt-3"}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
