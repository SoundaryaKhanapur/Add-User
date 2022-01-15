import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    //adding + to ensure it's a number
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={Styles.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">UserName</lable>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />

        <lable htmlFor="age">UserAge (Years)</lable>
        <input
          id="age"
          type="number"
          onChange={userAgeChangeHandler}
          value={enteredAge}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
