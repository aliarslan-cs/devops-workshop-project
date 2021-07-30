import React from 'react';
const List = (props) => {
  const { people } = props;
  if (!people || people.length === 0) return <p>No friends, sorry</p>;
  return (
    <table className="table table-striped table-light">
      <thead>
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Nick Name</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => {
          return (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.nickname}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default List;
