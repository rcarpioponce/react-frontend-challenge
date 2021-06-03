import { useState, useEffect } from 'react'
import { getProductsList } from '../helpers/getProductsList';

export const useProductsFetch = ( ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getProductsList(  )
            .then( products => {
                setState({
                    data: products,
                    loading:false
                })
            })
    }, [])

    return state;
}


