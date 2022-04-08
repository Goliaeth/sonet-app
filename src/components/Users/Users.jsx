import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/anonim-ava.png";
import React from "react";

export default class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="avatar"
                    className={classes.userPhoto}
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
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
        })}
      </div>
    );
  }
}
