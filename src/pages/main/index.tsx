/** @jsxImportSource @emotion/react */
import {HTMLAttributes} from "react";
import useBalance from "../../hooks/useBalance";
import useGetWalletInfo from "../../hooks/useGetWalletInfo";
import {Button, Card, Col, DatePicker, Divider, Input, Progress, Row, Slider, Spin, Switch} from "antd";
import Address from "../../components/Address";
import {NETWORKS} from "../../config/constant";
import Balance from "../../components/Balance";
import Deposit from "../../components/Deposit";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Main = ({ ...rest }: Props) => {
  const { address, isMainNet, balance } = useGetWalletInfo();
  const aTronBalance = useBalance(address);

  const blockExplorer = isMainNet ? NETWORKS["mainnet"].blockExplorer : NETWORKS["testnet"].blockExplorer

  return (
      <div>
          {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
          <div style={{ border: "1px solid #cccccc", padding: 16, width: 'fit-content', margin: "auto", marginTop: 64 }}>
              <h2>ATron Vending Machine</h2>
              <Divider />
              Your Address:
              <Address address={address} blockExplorer={blockExplorer} />
              <Divider />
              Your Balance:
              <Balance address={address} />
              <Divider />
              Your Contract Address:
              <Address
                  // TODO: .env
                  address={"TPjt7FadaLMzks7SoYiyg3ywbsDWo5t6UJ"}
                  blockExplorer={blockExplorer}
              />
              <Divider />

              <Row gutter={4} align="middle">
                  <Col>
                      {'Deposit(TRX -> ATRX)'}
                  </Col>
                  <Col>
                      <Deposit />
                  </Col>
              </Row>
              <Divider />
          </div>
      </div>
  );
};

export default Main;
