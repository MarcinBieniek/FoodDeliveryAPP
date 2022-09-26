import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './ProductList.module.scss';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductList = () => {

    return (
        <Container>
            <SingleProduct />
        </Container>     
    )
}

export default ProductList;

