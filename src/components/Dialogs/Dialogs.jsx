import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <div className={props.curClass}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <DialogItem name="Ivan" id="1" curClass={`${classes.dialog} ${classes.active}`}/>
        <DialogItem name="Sasha" id="2" curClass={`${classes.dialog}`}/>
        <DialogItem name="Valera" id="3" curClass={`${classes.dialog}`}/>
        <DialogItem name="Viktor" id="4" curClass={`${classes.dialog}`}/>
        <DialogItem name="Michael" id="5" curClass={`${classes.dialog}`}/>
        <DialogItem name="Viktoria" id="6" curClass={`${classes.dialog}`}/>
      </div>
      <div className={classes.messageItems}>
        <Message message="Lorem ipsum dolor sit amet consectetur." />
        <Message message="Lorem ipsum dolor sit amet consectetur." />
        <Message message="Lorem ipsum dolor sit amet consectetur." />
      </div>
    </div>
  );
};

export default Dialogs;
