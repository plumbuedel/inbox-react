import setMessagesAction from './setMessagesAction';


const deleteMessages = (messages) => {

    return dispatch => {
        const result = messages.reduce((acc, val) => {
              if (!val.selected) {
                acc.push(val);
              }
              return acc;
        
            }, []);
        dispatch(setMessagesAction(result));
    }
}

export default deleteMessages;