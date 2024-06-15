import React, { useState } from 'react';

import { data } from '../data';

const UseState = () => {
  // declaration of state
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((item) => {
        {
          /* console.log(item); */
        }
        const { id, name } = item;
        {
          /* console.log(id, name); */
        }
        return (
          <div key={id}>
            <h4 className="text-uppercase mt-3">{name}</h4>
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}

      <button
        type="button"
        className="mt-5 btn btn-primary"
        // onClick={clearAll}
        onClick={() => setPeople([])}
      >
        clear All
      </button>
    </div>
  );
};

export default UseState;
