import { connect } from "react-redux"
import { sendMessageActionCreator } from "../../redux/dialogsReducer"
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
    sendMessage: (text) => {
      dispatch(sendMessageActionCreator(text))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
