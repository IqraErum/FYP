import React from 'react';

function CustomerLoginForm() {
  return (
    <form>
    <h2>Login Here</h2>
  
  <label htmlFor="email"></label>
  <input id="email" name="email" placeholder="Enter Email"></input>

  <label htmlFor="password"></label>
  <input type="password" id="password" name="password" placeholder="password" />

  <button type="submit">Submit</button>
</form>
    
  );
}

export default CustomerLoginForm;
