import React from 'react'
import {Row} from 'react-bootstrap';
import '../css/chart.css';
import TopBook from './TopBook';
import Graph from './Graph';

export default function ChartModule(props) {
    let bestBidQuantity = props.bestBid.map(item => (
        <div>
                { item.quantity.toFixed(6) }
        </div>
    ));
    let bestBidPrice = props.bestBid.map(item => (
        <div>
                 ${ item.price.toFixed(2) }
        </div>
    
    ));
    let bestBidTime = props.bestBid.map(item => (
      <div>
               { item.bestTime }
      </div>
    )); let bestAskQuantity = props.bestAsk.map(item => (
        <div>
                { item.quantity.toFixed(6) }
        </div>
    ));
    let bestAskPrice = props.bestAsk.map(item => (
        <div>
                ${ item.price.toFixed(2) }
        </div>
    
    ));
    let bestAskTime = props.bestAsk.map(item => (
      <div>
              { item.bestTime }
      </div>
    ));
    return (
        <div className = "chart">
           
            <Row>
            <div className = "borderBottom">
                <div className = "titleBox">
            <h2>Real Time Chart</h2>
                </div>
                </div>
            <TopBook bestBidQuantity = {bestBidQuantity} bestBidPrice = {bestBidPrice} bestAskQuantity = {bestAskQuantity} bestAskPrice = {bestAskPrice}></TopBook>
            {/* <Graph  bestBidPrice = {bestBidPrice} bestBidTime = {bestBidTime}  bestAskPrice = {bestAskPrice} bestAskTime = {bestAskTime}></Graph> */}
               
            
               
            </Row>
        </div>
    )
}
