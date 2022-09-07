import React from 'react';
// import PropTypes from 'prop-types';

import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopBar = () => (
    <Navbar className={styles.navbar}>
        <Container className={styles.container}>
          <Navbar.Brand href="/" className={styles.brand}>
           <img src={`${process.env.PUBLIC_URL}/images/design/logoblack.png`} />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end"> 
            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
            <Navbar.Text>
                <a href="/login" className={styles.login}>Hello, Amit!</a>
            </Navbar.Text>
          </Navbar.Collapse>  
        </Container>
    </Navbar>
);

// TopBar.PropTypes = {};

export default TopBar;
