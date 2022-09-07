import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MenuBar.module.scss';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

const MenuBar = () => (
    <Navbar>
        <Container>
            <Nav>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

// MenuBar.PropTypes = {}

export default MenuBar;

