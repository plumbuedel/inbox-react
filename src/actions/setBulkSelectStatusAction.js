export const SET_BULK_SELECT_STATUS = 'SET_BULK_SELECT_STATUS';

const setBulkSelectStatus = (bool) => ({type: SET_BULK_SELECT_STATUS, payload: bool});

export default setBulkSelectStatus;