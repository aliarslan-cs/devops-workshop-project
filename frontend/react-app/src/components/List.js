import React from 'react';
const List = (props) => {
  const { people } = props;
  if (!people || people.length === 0) return <p>No friends, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Nick Names</h2>
      {people.map((person) => {
        return (
          <li key={person.name} className='list'>
            <span className='repo-text'>{person.name} </span>
            <span className='repo-description'>{person.nickname}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
