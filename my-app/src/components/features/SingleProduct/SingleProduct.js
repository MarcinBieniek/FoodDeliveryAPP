import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './SingleProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = () => {

    return (
        <div className={styles.product_container}>
            <img src={`${process.env.PUBLIC_URL}/images/products/01-AlooMatar.jpeg`} />
            <h1 className={styles.product_name}>Allo Matar Chicken Curry with Rice</h1>
            
            <div className={styles.product_descriptionDiv}>
                <div className={styles.product_descritpionPersonDiv}>
                    <img src={`${process.env.PUBLIC_URL}/images/chef/01-Amelia.jpg`} />
                    <p>Amelia Smith</p>
                </div>
                <div className={styles.product_descriptionDetailsDiv}>
                    <FontAwesomeIcon className={styles.product_pepper} icon={faPepperHot} />
                </div>
            </div>
            <hr className={styles.product_line}></hr>
            
            <div className={styles.product_finalize}>
                <p>€60.00</p>
                <button>Add</button>
            </div>
        </div> 
    )
}

export default SingleProduct;

