import React from 'react';
// import PropTypes from 'prop-types';

import Hero from '../../views/Hero/Hero';
import FindFoodBar from '../../features/FindFoodBar/FindFoodBar';

const Homepage = () => {

    return (
        <>
            <Hero />
            <FindFoodBar />
        </>
    );
};

// Homepage.propTypes = {}

export default Homepage;