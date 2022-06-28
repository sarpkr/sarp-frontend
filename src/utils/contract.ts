import aTronAbi from "../config/contracts/abi/atron.json";

import { getATronAddress } from "./address";

export const getContract = (abi: any, address: string, tronWeb: any) => {
  return tronWeb?.contract(abi, address);
};

export const getATronContract = (tronWeb: any) => {
  const aTronAddress = getATronAddress();
  if (!tronWeb) {
    return;
  }

  return {
    address: aTronAddress,
    contract: getContract(aTronAbi, aTronAddress, tronWeb),
  };
};
