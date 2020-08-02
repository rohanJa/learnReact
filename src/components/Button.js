import React, { useState } from 'react';

const Button = ({ setCount, count, name }) => {
  return <button onClick={() => setCount(name)}>{name}</button>;
};

export default Button;
