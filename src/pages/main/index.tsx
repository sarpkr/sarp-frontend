/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import useFetchATronBallance from "../../hooks/useFetchAtronBallance";
import useGetWalletInfo from "../../hooks/useGetWalletInfo";

const container = css``;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Main = ({ ...rest }: Props) => {
  const { address, isMainNet, balance } = useGetWalletInfo();
  const aTronBalance = useFetchATronBallance(address);

  return (
    <div css={[container]} {...rest}>
      <h3>address:{address}</h3>
      <h3>isMainNet:{`${isMainNet}`}</h3>
      <h3>balance:{balance}</h3>
      <h3>aTronBalance:{aTronBalance.toString()}</h3>
    </div>
  );
};

export default Main;
