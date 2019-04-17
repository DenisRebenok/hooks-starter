import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo
} from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';

export const UserContext = createContext({ user: true });

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Denys Dishes';

  const titleReversed = useMemo(() => reverseWord(name), [name]);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
        {titleReversed}
      </h1>
      <Toggle />
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
  );
};

export default App;
