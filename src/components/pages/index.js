import React, { Fragment, useContext } from 'react';
import { userContext } from '../../context/userContext';
import { login } from '../../utils/login';

const Pages = () => {
  const { user, setUser } = useContext(userContext);
  /*
    The changes done to 'value' here by using setValue() function
    will change the value of 'value' in the whole component where
    ever the 'value' is used
  */

  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Pages;
