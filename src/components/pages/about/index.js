import React, { useContext } from 'react';
import { userContext } from '../../../context/userContext';
const About = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default About;
