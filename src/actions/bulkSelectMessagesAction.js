import setMessages from './setMessagesAction';


const bulkSelectMessages = (messages, bool) => {
    return dispatch => {
        const result = messages.map(message => {
            message.selected = bool;
            return message;
        });
        dispatch(setMessages(result));
    }
}

export default bulkSelectMessages;