import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/anonim-ava.png";

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  const usersList = props.users.map((user) => {
    return (
      <div key={user.id}>
        <span>
          <div>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
              className={classes.userPhoto}
            />
          </div>
          <div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
          </span>
        </span>
      </div>
    );
  });
  return <div>{usersList}</div>;
};

export default Users;
