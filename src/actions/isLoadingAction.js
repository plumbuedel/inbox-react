export const IS_LOADING = 'IS_LOADING';

const setIsLoading = bool => {
    return {
        type: IS_LOADING,
        payload: bool
    };
}
export default setIsLoading;