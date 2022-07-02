import aTronAbi from "../config/contracts/abi/atron.json";
import dexAbi from "../config/contracts/abi/dex.json";

import {getATronAddress, getDexAddress} from "./address";

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

export const getDexContract = (tronWeb: any) => {
  const dexAddress = getDexAddress();
  if (!tronWeb) {
    return;
  }

  return {
    address: dexAddress,
    contract: getContract(dexAbi, dexAddress, tronWeb),
  };
};
