import { useState, useEffect } from 'react'
import { getProduct } from '../helpers/getProduct';

export const useProductFetch = ( id ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getProduct( id )
            .then( product => {
                setState({
                    data: product,
                    loading:false
                })
            })
    }, [id])

    return state;
}


