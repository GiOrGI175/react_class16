import React, { useState, useRef } from 'react';

import './App.css';

const App2 = () => {
  const [name, setName] = useState('');
  const [surnmae, setsurnmae] = useState('');

  const nameInputRef = useRef(null);
  const surnameInputRef = useRef(null);

  console.log(name);

  console.log(nameInputRef.current);

  const handleKeyup1 = (e) => {
    if (e.key === 'Enter') {
      surnameInputRef.current.focus();
    }
  };

  const handleKeyup2 = (e) => {
    if (e.key === 'Enter') {
      surnameInputRef.current.focus();
    }
  };

  return (
    <div>
      <form action=''>
        <label htmlFor='myName'>Name</label>
        <input
          type='text'
          id='myName'
          ref={nameInputRef}
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleKeyup1}
        />

        <br />

        <label htmlFor='mysurname'>Surname</label>
        <input
          type='text'
          id='mysurname'
          ref={surnameInputRef}
          placeholder='name'
          value={surnmae}
          onChange={(e) => setsurnmae(e.target.value)}
          onKeyUp={handleKeyup2}
        />
      </form>
    </div>
  );
};

export default App2;
