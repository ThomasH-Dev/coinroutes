import React from'react';
import {Col,Row} from 'react-bootstrap';
import '../css/orderColumn.css';


export default function OrderColumn({style, list}) {
    
    let left = list.map(item => (
        <div>
                <p>{ item.quantity.toFixed(6) }</p>
        </div>
    ));
    let right = list.map(item => (
        <div>
                <p> ${ item.price.toFixed(2) }</p>
        </div>
    ));

    return (
        <>
           <Row >
           <Col ><p>{left}</p></Col>
           <Col><p style={style}>{right} </p></Col>
            
        </Row>
        </>
    );
}