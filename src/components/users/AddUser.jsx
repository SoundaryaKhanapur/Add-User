import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Styles from "./AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age.",
      });
      return;
    }
    //adding + to ensure it's a number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age.",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
