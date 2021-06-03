import React from 'react'
import PropTypes from 'prop-types';
import { Col, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { AddCartButton } from './AddCartButton'
export const ProductItem = ({ id, title, price, image}) => {
    return (
        <Col lg="3" md="3" xs="12" className='mb-4 h-100'>
            <Card style={{ height: '370px' }}>
                <Card.Img className='img-fluid' variant="top" src={image} alt={title} />
                <Card.Body>
                    <Card.Title>
                        <Link to={`/product/${id}`}>{ title }</Link>
                    </Card.Title>
                    <Row>
                        <Col>
                            $. { price }
                        </Col>
                        <Col>
                            <AddCartButton productId={id} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
ProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}