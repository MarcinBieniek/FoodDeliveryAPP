//selectors
export const getAllDishes = ({dishes}) => dishes;
export const getBreakfastDishes = ({dishes}) => dishes.filter(dish => dish.mealType === "Breakfast");

//actions
//const createActionName = actionName => `app/cards/${actionName}`;

//action creators


const dishesReducer = (statePart = [], action) => {
    return statePart;
};

export default dishesReducer;