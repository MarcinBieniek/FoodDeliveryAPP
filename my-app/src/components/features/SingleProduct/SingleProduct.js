import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './SingleProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

import Col from 'react-bootstrap/Col';

const SingleProduct = props => {

    return (
        <div className={styles.product_container}>
            <img src={`${process.env.PUBLIC_URL}/images/products/01-AlooMatar.jpeg`} />
            <h1 className={styles.product_name}>{props.name}</h1>
            
            <div className={styles.product_descriptionDiv}>
                <div className={styles.product_descritpionPersonDiv}>
                    <img src={`${process.env.PUBLIC_URL}/images/chef/01-Amelia.jpg`} />
                    <p>{props.restaurant}</p>
                </div>
                <div className={styles.product_descriptionDetailsDiv}>
                    <FontAwesomeIcon className={styles.product_pepper} icon={faPepperHot} />
                </div>
            </div>
            <hr className={styles.product_line}></hr>
            
            <div className={styles.product_finalize}>
                <p>${props.price}</p>
                <button>Add</button>
            </div>
        </div> 
    )
}

export default SingleProduct;

