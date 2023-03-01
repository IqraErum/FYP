import React from 'react';

function CustomerSignupForm() {
  return (
    <form>
    <h2>Signup Here</h2>
  <label htmlFor="name"></label>
  <input type="text" id="name" name="name" placeholder="Enter Name" />

  <label htmlFor="email"></label>
  <input id="email" name="email" placeholder="Enter Email"></input>

  <label htmlFor="password"></label>
  <input type="password" id="password" name="password" placeholder="password" />

  <button type="submit">Submit</button>
</form>
  );
}

export default CustomerSignupForm;
