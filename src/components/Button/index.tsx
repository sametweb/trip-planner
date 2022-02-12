import React from "react";
import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  role?: 'success' | 'danger' | 'warning' | 'info';
}

const Button: React.FC<Props> = (props) => {
  const { title, className, size = 'md', bordered: isBordered = false, role = '', ...theRest } = props;

  const bordered = isBordered ? 'bordered' : '';
  const classNames = [
    styles.buttonBase,
    styles[size],
    styles[role],
    styles[bordered],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...theRest}>
      {title}
    </button>
  );
};

export default Button;
