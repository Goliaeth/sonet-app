import classes from "./Message.module.css";

const Message = (props) => {
  return <div className={props.givenClass}>{props.message}</div>;
};

export default Message;
