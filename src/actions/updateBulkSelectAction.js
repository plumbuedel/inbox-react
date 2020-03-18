import bulkSelectMessages from './bulkSelectMessagesAction';
import setBulkSelectStatus from './setBulkSelectStatusAction';


const updateBulkSelect = (messages, bool) => {
    return dispatch => {
        dispatch(setBulkSelectStatus(!bool));
        dispatch(bulkSelectMessages(messages, !bool));
    }
}

export default updateBulkSelect;