import React, { useState } from 'react';
import {ListGroup, Tab,  Col, } from 'react-bootstrap';
import '../css/pairs.css';


export default function Pair(props) {
    const [selectedETH, setSelectedETH] = useState(true);
    const [selectedBTC, setSelectedBTC] = useState(false);
    const [selectedLTC, setSelectedLTC] = useState(false);
    const [selectedBCH, setSelectedBCH] = useState(false);

    /**
     * Handles ETH radio button.
     */
    const handleETHClick = () => {
        if(!selectedETH) {
            setSelectedETH(true);
            setSelectedBTC(false);
            setSelectedLTC(false);
            setSelectedBCH(false);
            props.setCurrency("ETH-USD");
        }
    }

    /**
     * Handles BTC radio button.
     */
    const handleBTCClick = () => {
        if(!selectedBTC) {
            setSelectedBTC(true);
            setSelectedETH(false);
            setSelectedLTC(false);
            setSelectedBCH(false);
            props.setCurrency("BTC-USD");
        }
    }

    /**
     * Handles LTC switch
     */
    const handleLTCClick = () => {
        if(!selectedLTC) {
            setSelectedBTC(false);
            setSelectedETH(false);
            setSelectedLTC(true);
            setSelectedBCH(false);
            props.setCurrency("LTC-USD");
        }
    }
     /**
     * Handles BCH switch
     */
    const handleBCHClick = () => {
        if(!selectedBCH) {
            setSelectedBTC(false);
            setSelectedETH(false);
            setSelectedLTC(false);
            setSelectedBCH(true);
            props.setCurrency("BCH-USD");
        }
    }

    return (
        <div className = "pairs">
            <div className = "borderBottom">
            <div className = "titleBox">
            
            <h2>Pairs</h2>
            </div>
            </div>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

                <Col >
                    <ListGroup>
                        <ListGroup.Item variant = "dark" onChange = {() => {}} onClick = { handleETHClick } checked = { selectedETH } action href="#ETH">
                        ETH/USD
                        </ListGroup.Item>
                        <ListGroup.Item variant = "dark" onChange = {() => {}} onClick = { handleBTCClick } checked = { selectedBTC } action href="#BTC">
                        BTC/USD
                        </ListGroup.Item>
                        <ListGroup.Item variant = "dark" onChange = {() => {}} onClick = { handleLTCClick } checked = { selectedLTC } action href="#ltc">
                        LTC/USD
                        </ListGroup.Item>
                        <ListGroup.Item  variant = "dark" onChange = {() => {}} onClick = { handleBCHClick } checked = { selectedBCH } action href="#BCH">
                        BCH/USD
                        </ListGroup.Item>
                    
                    </ListGroup>
                </Col>
    
 
            </Tab.Container>
        </div>
    );
}