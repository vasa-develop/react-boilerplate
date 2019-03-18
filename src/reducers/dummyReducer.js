import { DUMMY_ACTION } from '../actions/types';

const intial_state = {
    items: []
};

export default (state = intial_state, action) => {
    switch(action.type){
        case DUMMY_ACTION:
            return {
                ...state,
                items: action.payload    
            }
        default:
            return state;
    }
}