import React from "react"

type MessagePropsType = {
  message: string
  givenClass?: string
}

const Message: React.FC<MessagePropsType> = (props) => {
  return <div className={props.givenClass}>{props.message}</div>;
};

export default Message;
