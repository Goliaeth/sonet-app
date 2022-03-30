import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>some image</div>
      <div>ava + descr</div>
      <div>
        My posts
        <div>New Post form</div>
        <div>Posts List</div>
      </div>
    </div>
  );
};

export default Profile;
