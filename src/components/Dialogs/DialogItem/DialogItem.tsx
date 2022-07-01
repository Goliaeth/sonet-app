import React from "react"
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  id: number
  name: string
  givenClass?: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={props.givenClass}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
