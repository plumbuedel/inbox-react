import setMessagesAction from './setMessagesAction';


const setReadMarkOn = (messages, bool) => {

    return dispatch => {
        const result = messages.map(message => {
          if (message.selected) {
            message.read = bool;
          }
          return message;
        });
        dispatch(setMessagesAction(result));
    }
}

export default setReadMarkOn;