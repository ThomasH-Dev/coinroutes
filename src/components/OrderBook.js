import React from "react";
import { Col, Row} from "react-bootstrap";
import OrderColumn from "./OrderColumn";

export default function OrderBook(props) {
  return (
    <div>
      <Row className="noPad">
        <div className="borderBottom">
          <div className="titleBox">
            <h2>Order Book</h2>
          </div>
        </div>
        <div className="borderBottom">
          <Row className="noPad">
            <Col className="noPad">
              <p>Market Size</p>
            </Col>
            <Col className="noPad">
              <p>Price (USD)</p>
            </Col>
          </Row>
        </div>

        <Col className="noPad" >
          <OrderColumn title="Bids" style={{color: '#24C13D'  }}  list={props.asks} />
        </Col>
      </Row>
      <Row className="noPad">
        <Col className="noPad">
          <OrderColumn title="Asks"style={{color: '#FF1F1F'  }} list={props.bids} />
        </Col>
      </Row>
    </div>
  );
}
