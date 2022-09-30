const initialState = {
    
    dishes: [
        //Italian
        {
            id: 1,
            name: 'Medierraean Breakfast',
            cusine: 'Itailian',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 10,
        },
        {
            id: 2,
            name: 'Vegetarian Breakfast',
            cusine: 'Itailian',
            mealType: 'Breakfast',
            foodType: 'vegetarian',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 10,
        },
        {
            id: 3,
            name: 'Vegan Breakfast',
            cusine: 'Itailian',
            mealType: 'Breakfast',
            foodType: 'vegan',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 10,
        },
        {
            id: 4,
            name: 'Omlette',
            cusine: 'Itailian',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 8.5,
        },
        {
            id: 5,
            name: 'Calamari e Zucchinie',
            cusine: 'Itailian',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 7.5,
        },
        {
            id: 6,
            name: 'Fungi Ripieni',
            cusine: 'Itailian',
            mealType: 'Lunch',
            foodType: 'vegetarian',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 7,
        },
        {
            id: 7,
            name: 'Caesar Salad',
            cusine: 'Itailian',
            mealType: 'Lunch',
            foodType: 'vegan',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 6,
        },
        {
            id: 8,
            name: 'Zuppa del Giorno',
            cusine: 'Itailian',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 5,
        },
        {
            id: 9,
            name: 'Spaghetti alla Bolognese',
            cusine: 'Itailian',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 9.5,
        },
        {
            id: 10,
            name: 'Spaghetti Carbonara',
            cusine: 'Itailian',
            mealType: 'Dinner',
            foodType: 'vegetarian',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 9.5,
        },
        {
            id: 11,
            name: 'Pizza Vegan',
            cusine: 'Itailian',
            mealType: 'Dinner',
            foodType: 'vegan',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 8.5,
        },
        {
            id: 12,
            name: 'Proscuttio e Fungi',
            cusine: 'Itailian',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Portofino',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 8.5,
        },
        //polish
        {
            id: 13,
            name: 'Chicken sandwich',
            cusine: 'Polish',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 3.5,
        },
        {
            id: 14,
            name: 'Porridge',
            cusine: 'Polish',
            mealType: 'Breakfast',
            foodType: 'vegetarian',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 3.5,
        },
        {
            id: 15,
            name: 'Vegan pancakes',
            cusine: 'Polish',
            mealType: 'Breakfast',
            foodType: 'vegan',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 4.5,
        },
        {
            id: 16,
            name: 'Breakfast Skillet with Kielbasa and Eggs',
            cusine: 'Polish',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 5.5,
        },
        {
            id: 17,
            name: 'Chicken Soup',
            cusine: 'Polish',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 3.5,
        },
        {
            id: 18,
            name: 'Jarzynowa Soup',
            cusine: 'Polish',
            mealType: 'Lunch',
            foodType: 'vegetarian',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 3.5,
        },
        {
            id: 19,
            name: 'Potato Pancakes',
            cusine: 'Polish',
            mealType: 'Lunch',
            foodType: 'vegan',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 6.75,
        },
        {
            id: 20,
            name: 'Beans Breton Style',
            cusine: 'Polish',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 5.5,
        },
        {
            id: 21,
            name: 'Breaded Pork Cutler',
            cusine: 'Polish',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 9.5,
        },
        {
            id: 22,
            name: 'Dumplings with potato & cheese',
            cusine: 'Polish',
            mealType: 'Dinner',
            foodType: 'vegetarian',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 7.75,
        },
        {
            id: 23,
            name: 'Vegan Stuffed Cabbage',
            cusine: 'Polish',
            mealType: 'Dinner',
            foodType: 'vegan',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 7.75,
        },
        {
            id: 24,
            name: 'Pork Shank',
            cusine: 'Polish',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Zakopianka',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 9.5,
        },
        //indian
        {
            id: 25,
            name: 'Murg Malai',
            cusine: 'Indian',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 15,
        },
        {
            id: 26,
            name: 'Punjabi Samosa',
            cusine: 'Indian',
            mealType: 'Breakfast',
            foodType: 'vegetarian',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 8,
        },
        {
            id: 27,
            name: 'Paneer Fingers',
            cusine: 'Indian',
            mealType: 'Breakfast',
            foodType: 'vegan',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 11,
        },
        {
            id: 28,
            name: 'Saar Lamb Kebab',
            cusine: 'Indian',
            mealType: 'Breakfast',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 15,
        },
        {
            id: 29,
            name: 'Kadhai Chicken',
            cusine: 'Indian',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 19,
        },
        {
            id: 30,
            name: 'Aloo Gobi',
            cusine: 'Indian',
            mealType: 'Lunch',
            foodType: 'vegetarian',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 16,
        },
        {
            id: 31,
            name: 'Bhindi Masala',
            cusine: 'Indian',
            mealType: 'Lunch',
            foodType: 'vegan',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 16,
        },
        {
            id: 32,
            name: 'Chicken Vu=indaloo',
            cusine: 'Indian',
            mealType: 'Lunch',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 19,
        },
        {
            id: 33,
            name: 'Curry',
            cusine: 'Indian',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 15,
        },
        {
            id: 34,
            name: 'Aloo Matar',
            cusine: 'Indian',
            mealType: 'Dinner',
            foodType: 'vegetarian',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 15,
        },
        {
            id: 35,
            name: 'Aloo Pasan',
            cusine: 'Indian',
            mealType: 'Dinner',
            foodType: 'Vegan',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 15,
        },
        {
            id: 36,
            name: 'Chicken Korma',
            cusine: 'Indian',
            mealType: 'Dinner',
            foodType: 'non-veg',
            restaurant: 'Indian Tiger',
            city: ["New York", "Chichago", "Boston"],
            stars: 3,
            price: 20,
        },
    ]
}

export default initialState;