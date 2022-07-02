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
    "e16d9656bff38ab8a3d40065dcbc62bc28438ae1b08432261f760d5ab3d760c0",
});

export const getTronWeb = () =>
  getCheckTronLink() && window.tronWeb.defaultAddress.base58
    ? window.tronWeb
    : tronWeb;
