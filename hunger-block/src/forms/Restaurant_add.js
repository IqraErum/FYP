import React from 'react';

const RestaurantAddForm = () => {
  return (
    <form>
    <h2>Add Restaurant</h2>
  <label htmlFor="name"></label>
  <input type="text" id="name" name="name" placeholder="Enter Name" />

  <label htmlFor="description"></label>
  <textarea id="description" name="description" placeholder="Description"></textarea>

  <label htmlFor="address"></label>
  <input type="text" id="address" name="address" placeholder="Address" />

  <label htmlFor="phone"></label>
  <input type="tel" id="phone" name="phone"  placeholder="Phone number"/>

  <button type="submit">Add Restaurant</button>
</form>

  );
};

export default RestaurantAddForm;
