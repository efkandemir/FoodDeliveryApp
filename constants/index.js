export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaicon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/pizzaicon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pizzaicon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizzaicon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pizzaicon.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizzaicon.png'),
    },
];

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/rescard.jpg'),
            description: 'Hot and spicy pizzas',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaicon.png'),
                },
                {
                    id: 2,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaicon.png'),
                },
                {
                    id: 3,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaicon.png'),
                },
            ],
        },
    ],
};