import React, { useContext } from 'react'
import { Row, Col, Badge, Popover, Button, OverlayTrigger } from 'react-bootstrap';
import { Cart2 } from 'react-bootstrap-icons';

import Context from '../context/Context';
import { CartItem } from './CartItem';


export const CartShop = () => {
    const [context, setContext] = useContext(Context)
    const countProducts = context.length

    let totalProducts = 0;

    context.map( product => (
      totalProducts+=product.price
    ));

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Cart Detail</Popover.Title>
          <Popover.Content>
              <Row>
                  <Col>Item</Col>
                  <Col>Price</Col>
              </Row>
            {
                context.map( product => (
                    <CartItem {...product} key={product.id} />
                ))
            }
            <hr />
            <Row>
              <Col>Total:</Col>
              <Col>$ {totalProducts}</Col>
            </Row>
          </Popover.Content>
        </Popover>
      );
      
      const DetailCart = () => (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          <Button variant="success">
            <Cart2 color="white" />
            <Badge bg="primary">{ countProducts }</Badge>
          </Button>
        </OverlayTrigger>
      );

    return (
        <Row>
            <Col className='text-right'>
                <DetailCart />                
            </Col>
        </Row>
    )
}
