import React, { useState, useReducer } from 'react';

import { data } from '../../data';
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './action';

import reducer from './reducer';

const initialState = {
  people: data,
  isLoading: false,
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default UseReducer;
