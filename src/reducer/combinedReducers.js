import { combineReducers } from 'redux';
import isLoading from './isLoadingReducer';
import messages from './messagesReducer';
import bulkSelectStatus from './bulkSelectStatusReducer';


export default combineReducers({
  messages,
  isLoading,
  bulkSelectStatus
});
