import React, { Children, useState } from 'react';

type ButtonProps = {
  children?: number;
}

export function Button(props: ButtonProps) {

  const [counter, setCounter] = useState(props.children || 0);

  function increment() {
    setCounter(counter+1);
  }

  return (
    <button onClick={increment}>{ counter || "Default" }</button>
  );
}