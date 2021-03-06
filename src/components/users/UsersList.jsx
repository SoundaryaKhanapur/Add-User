import React from "react";
import Card from "../ui/Card";
import Styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={Styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
