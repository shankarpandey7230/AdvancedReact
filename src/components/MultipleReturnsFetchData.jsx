import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await res.json();
        // console.log(user);
        // console.log(res);
        setUser(user);
      } catch (error) {
        setIsError(true);
        // fetch only cares about network errors
        // axios will work
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  //   order matters
  // Do not place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
