import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ProductItem } from './ProductItem';
import { useProductsFetch } from '../hooks/useProductsFetch';

export const ProductList = () => {

    const {data: products, loading } = useProductsFetch();
    
    return (
        <Row>
            <Col>
                <Row>
                    { 
                        loading &&
                        <Col>
                            <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                            </Spinner>  
                        </Col>
                    }
                </Row>
                <Row>
                    {
                    products.map( product  => (
                        <ProductItem 
                            key = { product.id }
                            { ...product }
                        />
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
