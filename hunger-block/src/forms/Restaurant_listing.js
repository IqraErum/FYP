import React from 'react';


const restaurants = [
  { name: 'Restaurant A', cuisine: 'Italian', rating: 4.5, image: 'https://example.com/restaurant-a.jpg' },
  { name: 'Restaurant B', cuisine: 'Chinese', rating: 4.2, image: 'https://example.com/restaurant-b.jpg' },
  { name: 'Restaurant C', cuisine: 'Mexican', rating: 4.0, image: 'https://example.com/restaurant-c.jpg' },
  // add more restaurants here
];

function RestaurantList() {
  return (
    <><h2>Restaurant List</h2>
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant">
          <img src={restaurant.image} alt={restaurant.name} />
          <h2>{restaurant.name}</h2>
          <p>{restaurant.cuisine}</p>
          <p>{restaurant.rating}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default RestaurantList;

