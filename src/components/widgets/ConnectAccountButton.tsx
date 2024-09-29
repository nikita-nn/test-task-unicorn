import { useConnect } from "wagmi";
import { metaMask } from "wagmi/connectors";

/**
 * Кнопка подключения MetaMask wallet к профилю пользователя.
 */

export const ConnectAccountButton = () => {
  const { connect } = useConnect();

  return (
    <>
      <button
        className="main-button"
        onClick={() => connect({ connector: metaMask() })}
      >
        CONNECT METAMASK
      </button>
    </>
  );
};
