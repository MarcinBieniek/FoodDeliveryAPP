import React from 'react';
// import Prop-types from 'prop-types';

import styles from './Hero.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    return (
        <section className={styles.hero}>
            <img src={`${process.env.PUBLIC_URL}/images/design/herobg.png`} />
            <div className={styles.hero__text}>
                <h1 className={styles.hero__h1}>Homemade Food Just a Click Away</h1>              
                <form className={styles.hero__Form}>
                    <FontAwesomeIcon className={styles.hero__Form__icon1} icon={faLocationDot} />
                    <FontAwesomeIcon className={styles.hero__Form__icon2} icon={faLocationCrosshairs} />
                    <input type="text" className={styles.hero__Input} placeholder="Type Chicago, New York or Boston" name="name"/>
                </form>               
                <h2 className={styles.hero__h4}>Enter your location to view menu</h2>
            </div>
        </section>
    )
}

export default Hero;

