import React, { useState, useEffect } from 'react';
import Data from './data.json';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const users = Data;
    setUsers(users);

    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <div className='App'>
      <h1 className='title'>Search App</h1>
      <div className='searchBar'>
        <input
          type='text'
          className='search'
          placeholder='Search Users'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='flex'>
        {filteredUsers.map((user, idx) => (
          <UserList key={idx} {...user} />
        ))}
      </div>
    </div>
  );
}

function getClass(gender) {
  if (gender === 'male') {
    return 'gender ';
  } else if (gender === 'female') {
    return 'gender pink';
  }
  return 'pink';
}

const UserList = (props) => {
  const { name, company, gender, picture, balance } = props;

  return (
    <div className='item'>
      <img src={picture} alt='' />
      <div className={getClass(gender)}>{gender}</div>
      <div className='name'>
        <span>{name}</span>
      </div>
      <div className='balance'>{balance}</div>
      <div className='company'>
        <span>{company}</span>
      </div>
    </div>
  );
};

export default App;
