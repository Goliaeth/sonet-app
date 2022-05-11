import classes from "./Post.module.css";
import userpic from "../../../../assets/images/userpic.png";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={userpic} alt="userpic" />
      {props.message}
      <div>
        <span>like - {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
