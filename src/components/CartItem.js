import React from 'react'
import { Row, Col } from 'react-bootstrap';


export const CartItem = ({title, price}) => {
    return (
        <Row>
            <Col>{title}</Col>
            <Col>$. {price}</Col>
        </Row>
    )
}
