import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './ProductListHeader.module.scss';

const ProductListHeader = () => {

    return (
        <Container>
            <div className={styles.header}>
                <h1 className={styles.header_text}>All-Day Breakfast</h1>
                <hr className={styles.header_line}></hr>
                <h1 className={styles.header_button}>View All</h1>
            </div>
        </Container>     
    )
}

export default ProductListHeader;

