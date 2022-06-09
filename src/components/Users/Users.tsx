import React from "react"
import { UserType } from "../../types/types"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  isFollowingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
const Users: React.FC<PropsType> = ({
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
