import { DUMMY_ACTION } from './types'

export const dummyAction = () => dispatch => {
    //some action to perform which can be ASYNC or SYNC
    //For eg: Fetching data from the APIs
    let new_state = ['new_state'];
    dispatch({
        type: DUMMY_ACTION,
        payload: new_state
    });
}