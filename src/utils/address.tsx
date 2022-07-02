import {MAIN_NET, TEST_NET, aTronAddress, dexAddress} from "../config/contracts/address";

const DEBUG = process.env.NODE_ENV !== "production";

export const getIsMainNet = (nodeHost: string) =>
  "https://api.trongrid.io" === nodeHost ||
  "https://api.tronstack.io" === nodeHost;

const key = !DEBUG ? MAIN_NET : TEST_NET;

export const getATronAddress = () => {
  return aTronAddress[key];
};

export const getDexAddress = () => {
  return dexAddress[key];
};
