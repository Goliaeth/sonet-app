import { connect } from "react-redux"
import { addPostActionCreator } from "../../../redux/profileReducer"
import { AppStateType } from "../../../redux/reduxStore"
import MyPosts from "./MyPosts"

const mapStateToProps = (state: any) => {
  return {
    profilePage: state.profilePage,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (text: string) => {
      dispatch(addPostActionCreator(text))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
