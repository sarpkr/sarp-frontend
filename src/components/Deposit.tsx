import React, { FunctionComponent } from 'react';
import {Button, Input, InputNumber, notification} from "antd";
import {getATronContract, getDexContract} from "../utils/contract";
import {getTronWeb} from "../utils/tronweb";

interface OwnProps {}

type Props = OwnProps;

const Deposit: FunctionComponent<Props> = (props) => {
    const tronWeb = getTronWeb();

    const [value, setValue] = React.useState(0);
    const contractInfo = getDexContract(tronWeb);

    const onClick = () => {
        if (value > 0) {
            try {
                contractInfo?.contract.deposit(value).call().then((d) => {
                    console.log(d);
                    notification.open({
                        message: 'Deposit successfully processed',
                    });
                });
            } catch (error) {
                console.error(error);
                notification.open({
                    message: 'Failed to deposit',
                    description: error.message,
                });
            }
        }
    }

    return (
      <div style={{ display: 'flex', gridGap: 4 }}>
          <InputNumber
              size={'middle'}
              onChange={e => setValue(e)}
              value={value}
          />
          <Button
              onClick={onClick}
          >
              Send Value
          </Button>
      </div>
  );
};

export default Deposit;
