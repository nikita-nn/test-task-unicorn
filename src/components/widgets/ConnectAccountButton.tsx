import { useAccount, useConnect } from "wagmi";
import { useUser } from "../../providers/UserProvider.tsx";
import { useEffect } from "react";
import {metaMask} from "wagmi/connectors";

export const ConnectAccountButton = () => {
  const { connect } = useConnect();
  const { address } = useAccount();
  const { editUser } = useUser();

  useEffect(() => {
    if (address) {
      editUser("wallet", String(address));
    }
  });

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
