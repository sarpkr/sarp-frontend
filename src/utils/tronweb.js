import TronWeb from "tronweb";
import { IS_PRODUCTION } from "../config/constant";

export const getCheckTronLink = () => !!window.tronWeb;

export const tronWeb = new TronWeb({
  fullHost: IS_PRODUCTION
    ? "https://api.trongrid.io"
    : "https://api.shasta.trongrid.io",
  eventServer: IS_PRODUCTION
    ? "https://api.trongrid.io"
    : "https://api.shasta.trongrid.io",
  privateKey:
    "0917d354496d4c78ef724d8e5db23718c4480d87b71da4b12567378b3a35d7b1",
});

export const getTronWeb = () =>
  getCheckTronLink() && window.tronWeb.defaultAddress.base58
    ? window.tronWeb
    : tronWeb;
