import React from "react";
import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<Props> = (props) => {
  const { title, className, ...theRest } = props;

  return (
    <button className={className || styles.button} {...theRest}>
      {title}
    </button>
  );
};

export default Button;
