import React from  'react';
// import PropTypes from 'prop-types';
import {useState} from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './FindFoodBar.module.scss';
import Container from 'react-bootstrap/Container';

const FindFoodBar = () => {

    // useState for first column - Meal Type
    const [mealTypeIsActive, setMealTypeIsActive] = useState(false);
    const [mealTypeSelected, setMealTypeSelected] = useState('Breakfast');
    const mealTypeOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    // useState for second column - Select Cousine
    const [cusineIsActive, setCusineIsActive] = useState(false);
    const [cusineSelected, setCusineSelected] = useState('Italian');
    const cusineOptions = ['Italian', 'Polish', 'Indian', 'Chinese'];

    // useState for third column - Food Type 
    const [foodTypeIsActive, setFoodTypeIsActive] = useState(false);
    const [foodTypeSelected, setFoodTypeSelected] = useState('Non-veg');
    const foodTypeOptions = ['Non-veg', 'Vegetarian', 'Vegan', 'Fit']

    return (
        <Container>
            <form className={styles.findFood__wrapper}>

                <div className={styles.dropdown}>
                    
                    <div 
                        className={clsx(styles.dropdown__btn, styles.dropdown__btn__first)} 
                        onClick={(e) => setMealTypeIsActive(!mealTypeIsActive)}>
                        <p>Meal type</p>
                        <div className={styles.dropdown__btn__selectedDiv}>
                            <span className={styles.dropdown__btn__selected}>{mealTypeSelected}</span>
                            <FontAwesomeIcon className={styles.dropdown__btn__icon} icon={faCaretDown} />
                        </div>
                    </div>
                    
                    {mealTypeIsActive && (
                        <div className={styles.dropdown__content}>
                            {mealTypeOptions.map((option) => (
                            <div 
                                onClick={(e) => {
                                    setMealTypeSelected(option);
                                    setMealTypeIsActive(false);
                                }}        
                                className={styles.dropdown__item}
                            >
                                {option}
                            </div>
                            ))}
                        </div> 
                    )}

                </div>

                <div className={styles.dropdown}>
                    <div 
                        className={styles.dropdown__btn} 
                        onClick={(e) => setCusineIsActive(!cusineIsActive)}>
                        <p>Select Dish/Cusine</p>
                        <div className={styles.dropdown__btn__selectedDiv}>
                            <span className={styles.dropdown__btn__selected}>{cusineSelected}</span>
                            <FontAwesomeIcon className={styles.dropdown__btn__icon} icon={faCaretDown} />
                        </div>
                    </div>
                    {cusineIsActive && (
                        <div className={styles.dropdown__content}>
                            {cusineOptions.map((option) => (
                            <div 
                                onClick={(e) => {
                                    setCusineSelected(option);
                                    setCusineIsActive(false);
                                }}        
                                className={styles.dropdown__item}
                            >
                                {option}
                            </div>
                            ))}
                        </div> 
                    )}
                </div>

                <div className={styles.dropdown}>
                    <div 
                        className={clsx(styles.dropdown__btn, styles.dropdown__btn__last)}
                        onClick={(e) => setFoodTypeIsActive(!foodTypeIsActive)}>
                        <p>Food Type</p>
                        <div className={styles.dropdown__btn__selectedDiv}>
                            <span className={styles.dropdown__btn__selected}>{foodTypeSelected}</span>
                            <FontAwesomeIcon className={styles.dropdown__btn__icon} icon={faCaretDown} />
                        </div>
                    </div>
                    {foodTypeIsActive && (
                        <div className={styles.dropdown__content}>
                            {foodTypeOptions.map((option) => (
                            <div 
                                onClick={(e) => {
                                    setFoodTypeSelected(option);
                                    setFoodTypeIsActive(false);
                                }}        
                                className={styles.dropdown__item}
                            >
                                {option}
                            </div>
                            ))}
                        </div> 
                    )}
                </div>

                <button className={styles.submit__button}>Find Food</button>
            </form> 

        </Container>
    );
};

// FindFoodBar.PropTypes = {}

export default FindFoodBar;
