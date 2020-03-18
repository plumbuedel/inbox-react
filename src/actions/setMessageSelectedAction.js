import setMessages from './setMessagesAction';
import setBulkSelectStatus from './setBulkSelectStatusAction';

const setMessageSelected = (messages, selectedMessage, bool) => {
    
    return dispatch => {

    const result = messages.map(message => {
        if (selectedMessage === message) {
          message.selected = bool;
        }
        return message;
      });
      dispatch(setMessages(result));
      
      const selectedMessages = messages.reduce((acc, val) => val.selected ?  acc += 1 : acc, 0);
      if (selectedMessages === 0) {
           dispatch(setBulkSelectStatus(false));
      }
      if (selectedMessages === messages.length) {
          dispatch(setBulkSelectStatus(true));
      }
        }
}

export default setMessageSelected;