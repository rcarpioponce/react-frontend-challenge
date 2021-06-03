import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Context from '../context/Context'
import { useProductFetch } from '../hooks/useProductFetch'


export const AddCartButton = ({ productId }) => {
    
    const [context, setContext] = useContext(Context)

    const {data:product } = useProductFetch(productId);

    const handleAddCart = () => {
        context.push(product);
        setContext([...context])
    }

    return (
        <Button variant="primary" onClick={ handleAddCart }>ADD CART</Button>
    )
}
