import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './ProductList.module.scss';
import SingleProduct from '../SingleProduct/SingleProduct';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <SingleProduct />
                </Col>
                <Col>
                    <SingleProduct />
                </Col>
                <Col>
                    <SingleProduct />
                </Col>
                <Col>
                    <SingleProduct />
                </Col>
            </Row>
        </Container>     
    )
}

export default ProductList;

