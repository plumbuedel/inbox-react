import {IS_LOADING} from '../actions/isLoadingAction';


const isLoading = (state = true, action) => {
    if (action.type === IS_LOADING) {
        return action.payload;
    }
    return state;
} 

export default isLoading;