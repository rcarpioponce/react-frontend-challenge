import React from 'react'
import { useParams } from 'react-router';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useProductFetch } from '../hooks/useProductFetch';
import { AddCartButton } from './AddCartButton';

export const ProductDetail = () => {
    const { id }  = useParams();

    const {data: product, loading } = useProductFetch(id);

    const { title, image, category, description } = product


    return (
        <Row>

            {
                loading ?
                <Col lg='12'>
                    <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col> 
                :
                <>
                <Col lg='6'>
                    <img className='img-fluid' src={image} alt={title} />
                </Col>
                <Col lg='6'>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                    <p>Category: { category }</p>
                    <AddCartButton productId={id} />
                </Col>
                </>           
            }

        </Row>
        
    )
}
