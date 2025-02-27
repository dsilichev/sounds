import React from 'react';

export function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Hello World!</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => ++prev)}>Increment</button>
    </>
  )
}