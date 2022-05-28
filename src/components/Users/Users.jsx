import Paginator from "../common/Paginator/Paginator"
import User from "./User"

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  isFollowingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            isFollowingInProgress={isFollowingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
