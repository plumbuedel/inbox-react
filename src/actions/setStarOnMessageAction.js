import setMessages from './setMessagesAction';
const setStarOnMessage = (messages, selectedMessage) => {
    
    return dispatch => {

    const result = messages.map(message => {
        if (selectedMessage === message) {
          message.starred = !message.starred;
        }
        return message;
      });
      dispatch(setMessages(result));
        }
}

export default setStarOnMessage;