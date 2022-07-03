import React, {FunctionComponent} from 'react';
import {Button, InputNumber, notification} from "antd";
import {getDexContract} from "../utils/contract";
import {getTronWeb} from "../utils/tronweb";

interface OwnProps {
}

type Props = OwnProps;

const Deposit: FunctionComponent<Props> = (props) => {
    const tronWeb = getTronWeb();

    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const contractInfo = getDexContract(tronWeb);

    const onClick = () => {
        if (value > 0) {
            setLoading(true);

            contractInfo?.contract.deposit().send({
                feeLimit: 1 * (10 ** 8),
                callValue: value * (10 ** 6),
            }).then((d: any) => {
                console.log(d);
                notification.open({
                    message: 'Deposit successfully processed',
                });

                setLoading(false);
            }).catch((e: any) => {
                console.error(e);
                notification.open({
                    message: 'Failed to deposit',
                    description: e.message,
                });

                setLoading(false);
            })
        }
    }

    return (
        <div style={{display: 'flex', gridGap: 4}}>
            <InputNumber
                size={'middle'}
                onChange={e => setValue(e)}
                value={value}
            />
            <Button
                onClick={onClick}
                disabled={loading}
                loading={loading}
            >
                Send Value
            </Button>
        </div>
    );
};

export default Deposit;
