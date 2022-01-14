import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={Styles.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">UserName</lable>
        <input id="username" type="text" />

        <lable htmlFor="age">UserAge (Years)</lable>
        <input id="age" type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
