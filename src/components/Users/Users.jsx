import classes from "./Users.module.css";

const Users = (props) => {
  debugger
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "ava.png",
        followed: false,
        fullName: "Ivan",
        status: "bla-bla",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 2,
        photoUrl: "ava.png",
        followed: true,
        fullName: "Petr",
        status: "bla-bla",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 3,
        photoUrl: "ava.png",
        followed: false,
        fullName: "Jumbo",
        status: "bla-bla",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
    ]);
  }

  const usersList = props.users.map((user) => {
    return (
      <div key={user.id}>
        <span>
          <div>
            <img
              src={user.photoUrl}
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
          </span>
        </span>
      </div>
    );
  });
  return <div>{usersList}</div>;
};

export default Users;
