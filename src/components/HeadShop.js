import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CartShop } from './CartShop'
export const HeadShop = () => {
    return (
        <Row>
            <Col>
                <h2>Products</h2>
            </Col> 
            <Col>
                <CartShop />
            </Col> 
        </Row>
    )
}
