import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = () => (
    <div className={styles.topMenu__background}>
        <Container>    
            <Navbar className={styles.topMenu}>
                <ul>
                    <li><Link to="/">Order a meal</Link>
                        <ul> 
                            <li><Link to="/breakfast">Breakfast</Link></li>
                            <li><Link to="/lunch">Lunch</Link></li>
                            <li><Link to="/dinner">Dinner</Link></li>
                            <li><Link to="/dessert">Dessert</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/booking">Book a table</Link></li>
                    <li><Link to="/about">About us</Link></li> 
                    <li><Link to="/contact">Contact</Link></li> 
                </ul>
                <Navbar.Collapse className="justify-content-end">
                    <form className={styles.searchForm}>
                        <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
                        <input type="text" className={styles.searchInput} placeholder="Food I like" name="name" />
                        <button type="submit" className={styles.searchButton}>Search</button>
                    </form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
);

// MenuBar.PropTypes = {}

export default MenuBar;

