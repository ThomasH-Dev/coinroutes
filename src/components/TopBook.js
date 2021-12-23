import React from "react";
import { Col, Row } from "react-bootstrap";
import "../css/chart.css";


export default function TopBook(props) {
   
  return (
    <div>
      <Row>
        <Col>
          <div className="bestBox">
            <div className="top" className="greenTop">
              <h3> Best Bid </h3>
            </div>
            <Row>
            <Col>
              <p>Bid Quantity</p>
              <p>{props.bestBidQuantity}</p>
            

              </Col>
              <Col>
              <p>Bid Price</p>
              <p>{props.bestBidPrice}</p>
               
               
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="bestBox">
            <div className="top" className="redTop">
              <h3> Best Ask </h3>
            </div>
            <Row>
            <Col>
              <p>Bid Quantity</p>
              <p>{props.bestAskQuantity}</p>
            

              </Col>
              <Col>
              <p>Bid Price</p>
              <p>{props.bestAskPrice}</p>
               
               
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
