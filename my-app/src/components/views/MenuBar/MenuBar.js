import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MenuBar.module.scss';

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = () => (
    <Container>    
        <Navbar className={styles.topMenu}>
            <ul>
                <li><Link to="/">Select meal</Link>
                    <ul> 
                        <li><Link to="/breakfast">Breakfast</Link></li>
                        <li><Link to="/lunch">Lunch</Link></li>
                        <li><Link to="/dinner">Dinner</Link></li>
                        <li><Link to="/dessert">Dessert</Link></li>
                    </ul>
                </li>
                <li><Link to="/booking">Book a table</Link></li>
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/contact">Contact</Link></li> 
            </ul>
        </Navbar>
    </Container>
);

// MenuBar.PropTypes = {}

export default MenuBar;

