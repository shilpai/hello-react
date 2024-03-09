import { useState } from "react";

const UserFunction = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Count: {count} </h2>
      <h2>Count: {count2} </h2>
      <h3>Name: {props.name}</h3>
      <h3>Jobe Role: {props.jobRole} </h3>
      <h3>Location: {props.location} </h3>
    </div>
  );
};

export default UserFunction;
