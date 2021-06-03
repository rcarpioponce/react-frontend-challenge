import React from 'react';
import { shallow } from 'enzyme'
import { ProductItem } from "../../components/ProductItem"

describe('Pruebas en <GifGridItem />', () => {
    const id = 1;
    const price = 12.20;
    const title = 'UN TITULO';
    const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    const wrapper = shallow( <ProductItem
        id = { id } 
        price = { price }
        title={ title } 
        image={ image }  
    />)

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
})