import React from "react"

const Message = (props) => {
  return <div className={props.givenClass}>{props.message}</div>;
};

export default Message;
