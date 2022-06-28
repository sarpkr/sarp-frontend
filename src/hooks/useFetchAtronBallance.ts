import BigNumber from "bignumber.js";
import { useCallback, useEffect, useState } from "react";

import { getATronContract } from "../utils/contract";
import { getTronWeb } from "../utils/tronweb";

const useFetchATronBallance = (address?: string) => {
  const tronWeb = getTronWeb();
  const contractInfo = getATronContract(tronWeb);
  const [balance, setBalance] = useState<BigNumber>(new BigNumber(0));

  const fetchATronBallance = useCallback(async () => {
    if (address) {
      try {
        const _balance = await contractInfo?.contract.balanceOf(address).call();
        if (_balance._isBigNumber) {
          setBalance(new BigNumber(_balance._hex));
        }
      } catch (error) {
        console.log("fetchATronBallance on useFetchATronBallance", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    fetchATronBallance();
  }, [fetchATronBallance]);

  return balance;
};

export default useFetchATronBallance;
