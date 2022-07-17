import { Col, Divider, Row, Tabs } from "antd";
import Deposit from "../../components/Deposit";
import Exchange from "../../components/Exchange";
import CommonInfo from "../../components/CommonInfo";

const { TabPane } = Tabs;

const Main = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #cccccc",
          padding: 16,
          width: "fit-content",
          margin: "auto",
          marginTop: 64,
        }}
      >
        <h2>ATron Vending Machine</h2>
        <Tabs defaultActiveKey="Deposit">
          <TabPane tab="Deposit" key="1">
            <CommonInfo />

            <Row gutter={4} align="middle">
              <Col>{"Deposit(TRX -> ATRX)"}</Col>
              <Col>
                <Deposit />
              </Col>
            </Row>

            <Divider />
          </TabPane>

          <TabPane tab="Exchange" key="2">
            <CommonInfo />

            <Row gutter={4} align="middle">
              <Col>{"Exchange(ATRX -> TRX)"}</Col>
              <Col>
                <Exchange />
              </Col>
            </Row>

            <Divider />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Main;
