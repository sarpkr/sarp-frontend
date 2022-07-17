import React, { FunctionComponent } from "react";
import { Button, InputNumber, notification } from "antd";
import { getDexContract } from "../utils/contract";
import { getTronWeb } from "../utils/tronweb";
import useGetWalletInfo from "../hooks/useGetWalletInfo";
import useBalance from "../hooks/useBalance";

interface OwnProps {}

type Props = OwnProps;

const Exchange: FunctionComponent<Props> = (props) => {
  const { address } = useGetWalletInfo();
  const balance = useBalance(address);
  const tronWeb = getTronWeb();

  const tronBalance = tronWeb.fromSun(balance);

  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const contractInfo = getDexContract(tronWeb);

  const onClick = () => {
    if (value > 0) {
      setLoading(true);

      contractInfo?.contract
        .exchange(value * 10 ** 6)
        .send()
        .then((d: any) => {
          console.log(d);
          notification.open({
            message: "Exchange successfully processed",
          });
        })
        .catch((e: any) => {
          console.error(e);
          notification.open({
            message: "Failed to exchange",
            description: e.message,
          });
        })
        .finally(() => {
          setValue(0);
          setLoading(false);
        });
    }
  };

  return (
    <div style={{ display: "flex", gridGap: 4 }}>
      <InputNumber
        size={"middle"}
        onChange={(e) => setValue(e)}
        value={value}
        max={tronBalance.toNumber()}
        min={0}
      />
      <Button onClick={onClick} disabled={loading} loading={loading}>
        Send Value
      </Button>
    </div>
  );
};

export default Exchange;
