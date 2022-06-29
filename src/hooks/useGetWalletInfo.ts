import { useCallback, useEffect, useState } from "react";
import { getIsMainNet } from "../utils/address";

const useGetWalletInfo = () => {
  const [walletInfo, setWalletInfo] = useState<{
    address?: string;
    isMainNet: boolean;
    balance?: number;
  }>({
    address: undefined,
    isMainNet: true,
  });

  const handler = useCallback(async (e: MessageEvent<any>) => {
    let address: string | undefined = undefined;
    let isMainNet: boolean = true;
    if (
      e.data.message &&
      (e.data.message.action === "setAccount" ||
        e.data.message.action === "setNode")
    ) {
      if (e.data.message.action === "setNode") {
        address = window.tronWeb.defaultAddress.base58 || undefined;
        isMainNet =
          getIsMainNet(e.data.message.data?.connectNode?.fullNode) ||
          getIsMainNet(e.data.message.data?.node?.fullNode);
      }

      if (e.data.message.action === "setAccount") {
        address = e.data.message.data?.address || undefined;
        isMainNet = getIsMainNet(window.tronWeb.fullNode.host);
      }

      try {
        const balance = await window.tronWeb.trx.getBalance();
        setWalletInfo((prev) => ({ ...prev, address, isMainNet, balance }));
      } catch (error) {
        setWalletInfo((prev) => ({ ...prev, address, isMainNet }));
        console.log("handler error on useGetWalletInfo", error);
      }
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("message", handler);
    }

    return () => {
      window.removeEventListener("message", handler);
    };
  }, [handler]);

  const initWalletInfo = useCallback(async () => {
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      const address = window.tronWeb.defaultAddress.base58 || undefined;
      const isMainNet = getIsMainNet(window.tronWeb.fullNode.host);

      try {
        const balance = await window.tronWeb.trx.getBalance();
        setWalletInfo((prev) => ({ ...prev, address, isMainNet, balance }));
      } catch (error) {
        setWalletInfo((prev) => ({ ...prev, address, isMainNet }));
        console.log("initWalletInfo error on useGetWalletInfo", error);
      }
    }
  }, []);

  useEffect(() => {
    initWalletInfo();
  }, [initWalletInfo]);

  return walletInfo;
};

export default useGetWalletInfo;
