import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Context from './context/Context';

import { Container, Row, Col } from 'react-bootstrap'
import { HeadShop } from './components/HeadShop'
import { ProductList } from './components/ProductsList'
import { ProductDetail } from './components/ProductDetail';
export const MyShopApp = () => {

    const [context, setContext] = useState([])



    return (
        <Context.Provider value={[context, setContext]}>
            <Router>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='text-center mt-2'>My shop</h1>
                            <hr />
                        </Col>
                    </Row>
                    <HeadShop />
                    <Switch>
                        <Route exact path = '/'>
                            <ProductList />
                        </Route>
                        <Route exact path = '/product/:id'>
                            <ProductDetail />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </Context.Provider>
    )
}
