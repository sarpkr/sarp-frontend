import useGetWalletInfo from "../hooks/useGetWalletInfo";
import { Divider } from "antd";
import Address from "../components/Address";
import { NETWORKS } from "../config/constant";
import Balance from "../components/Balance";

import { dexAddress, MAIN_NET, TEST_NET } from "../config/contracts/address";

const CommonInfo = () => {
  const { address, isMainNet } = useGetWalletInfo();

  const blockExplorer = isMainNet
    ? NETWORKS["mainnet"].blockExplorer
    : NETWORKS["testnet"].blockExplorer;
  return (
    <>
      Your Address:
      <Address address={address} blockExplorer={blockExplorer} />
      <Divider />
      Your Balance:
      <Balance address={address} />
      <Divider />
      Your Contract Address:
      <Address
        address={dexAddress[isMainNet ? MAIN_NET : TEST_NET]}
        blockExplorer={blockExplorer}
      />
      <Divider />
    </>
  );
};

export default CommonInfo;
