import React from "react";
import useBalance from "../hooks/useBalance";

interface Props {
   address?: string;
}

 const Balance: React.FC<Props> = (props) => {
    const balance = useBalance(props.address);
    let floatBalance = parseFloat("0.00");
    let usingBalance = balance;
    if (usingBalance) {
        const tronBalance = usingBalance.toNumber();
        floatBalance = parseFloat(tronBalance);
    }

    let displayBalance = floatBalance.toFixed(4);

    return (
        <span
            style={{
                verticalAlign: "middle",
                fontSize: 24,
                padding: 8,
                cursor: "pointer",
            }}
        >
      {displayBalance}
    </span>
    );
}

export default Balance;
