import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={Styles.backdrop} onClick={props.onConfirm} />
      <Card className={Styles.modal}>
        <header className={Styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={Styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={Styles.actions}>
          <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
