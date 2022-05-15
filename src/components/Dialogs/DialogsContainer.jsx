import { connect } from "react-redux"
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import Dialogs from "./Dialogs"
import { compose } from "redux"

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
