import { useState } from "react";
import { useConnect } from "wagmi";
import { ErrorModal } from "./Modal.tsx";

export const ConnectAccountButton = () => {
  const { connect, connectors } = useConnect();
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = () => {
    connect(
      {
        connector: connectors[0],
      },
      {
        onError(error) {
          setError(error.message);
          setIsModalOpen(true);
        },
      },
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <>
      <button className="main-button" onClick={handleConnect}>
        CONNECT METAMASK
      </button>
      <ErrorModal
        isOpen={isModalOpen}
        data={String(error)}
        closeModal={closeModal}
      />
    </>
  );
};
