import { connect } from "react-redux"
import { DialogType, MessageType, actions } from "../../redux/dialogsReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import Dialogs from "./Dialogs"
import { compose } from "redux"
import { AppStateType } from "../../redux/store"

type MapStatePropsType = {
  dialogsPage: {
    dialogs: DialogType[]
    messages: MessageType[]
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (text: string) => {
      dispatch(actions.sendMessageActionCreator(text))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
