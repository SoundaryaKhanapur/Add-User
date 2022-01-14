import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <lable htmlFor="username">UserName</lable>
      <input id="username" type="text" />

      <lable htmlFor="age">UserAge (Years)</lable>
      <input id="age" type="number" />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
