import React from 'react';
import styles from './Message.module.css';

const Message = ({ text, className }) => {
  return <p className={styles[className]}>{text}</p>;
};

export default Message;
