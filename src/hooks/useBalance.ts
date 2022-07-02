import { useCallback, useEffect, useState } from "react";

import { getATronContract } from "../utils/contract";
import { getTronWeb } from "../utils/tronweb";

const useBalance = (address?: string) => {
  const tronWeb = getTronWeb();
  const contractInfo = getATronContract(tronWeb);
  const [balance, setBalance] = useState(tronWeb.BigNumber(0));

  const fetchATronBalance = useCallback(async () => {
    if (address) {
      try {
        const _balance = await contractInfo?.contract.balanceOf(address).call();
        if (_balance._isBigNumber) {
          setBalance(tronWeb.BigNumber(_balance._hex));
        }
      } catch (error) {
        console.error("Failed to fetch ATron balance", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    fetchATronBalance();
  }, [fetchATronBalance]);

  return balance;
};

export default useBalance;
