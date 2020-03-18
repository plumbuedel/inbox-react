import { getMessages } from '../service/getMessages';
import setMessages from '../actions/setMessagesAction'
import setIsLoading from './isLoadingAction';

const getData = () => {
    return (dispatch) => {

        getMessages(msgs => {
            dispatch(setMessages(msgs));
        });
        dispatch(setIsLoading(false));
    }
}

export default getData;