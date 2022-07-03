import React, { FunctionComponent } from 'react';
import {NETWORKS} from "../config/constant";
import { Typography } from "antd";

interface OwnProps {
    address?: string;
    blockExplorer: string;
}
const { Text } = Typography;

type Props = OwnProps;
const blockExplorerLink = (address: string, blockExplorer: string) => `${blockExplorer || NETWORKS["mainnet"]}#/address/${address}`;

const Address: FunctionComponent<Props> = ({address, blockExplorer}) => {
    let displayAddress = address?.substring(0, 5) + "..." + address?.substring(-4);
    const tronscanLink = blockExplorerLink(address ?? "", blockExplorer);

    return (
      <Text copyable={{ text: address }}>
          <a
              style={{ color: "#222222" }}
              target="_blank"
              href={tronscanLink}
              rel="noopener noreferrer"
          >
              {displayAddress}
          </a>
      </Text>
  );
};

export default Address;
