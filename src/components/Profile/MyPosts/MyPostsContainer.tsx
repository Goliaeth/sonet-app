import { connect } from "react-redux"
import { actions } from "../../../redux/profileReducer"
import { AppStateType } from "../../../redux/store"
import MyPosts from "./MyPosts"

const mapStateToProps = (state: any) => {
  return {
    profilePage: state.profilePage,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (text: string) => {
      dispatch(actions.addPostActionCreator(text))
    },
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
