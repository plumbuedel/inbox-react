
import setMessagesAction from './setMessagesAction';


const changeLabelsOn = (messages, label, action) => {

    return dispatch => {
        const result = messages.map(message => {
            if (message.selected) {
                if (!message.labels.includes(label) && action === 'add') {
                    message.labels.push(label);
                }
                if (message.labels.includes(label) && action === 'remove') {
                    message.labels = message.labels.reduce((acc, val) => {
                        if (val !== label) {
                            acc.push(val);
                        }
                        return acc;
                    }, []);
                }
            }
            return message;
        });
        dispatch(setMessagesAction(result));
    }
}

export default changeLabelsOn;

