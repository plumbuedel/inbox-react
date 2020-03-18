import {SET_BULK_SELECT_STATUS} from '../actions/setBulkSelectStatusAction';

const bulkSelectStatus = (state=false, action) => {
    if (action.type === SET_BULK_SELECT_STATUS) {
        return action.payload;
    }
    return state;
}

export default bulkSelectStatus;