import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/fakeData.json';
import Users from './components/Users/Users';
import Cart from './components/Cart/Cart';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    setUsers(fakeData);
  },[]);

  const [cart, setCart] = useState([]);

  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div>
      <Cart cart={cart}></Cart>
      {
        users.map(user => <Users user={user} handleAddUser={handleAddUser} key={user.id}></Users>)
      }
    </div>
  );
}

export default App;
