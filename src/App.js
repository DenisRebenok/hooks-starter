import React, { useState, useEffect, useRef, createContext } from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <UserContext.Provider value={{ user: false }}>
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
          Denys Dishes
        </h1>
        <Toggle />
        <Counter />
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default App;
