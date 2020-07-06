import * as actionTypes from './actionTypes';

const initialState = {
    name: 'John Doe',
    profession: 'Software Developer',
    brief: "tell littebit yourself or tagline"
};


const HeaderReducer = (state = initialState, action) => {
    switch(action.type) {
    
        case actionTypes.SUBMIT_HEADER:
            console.log("action dispatched",action);
            return { ...state, name: action.value.name, profession: action.value.profession, brief: action.value.brief};

        default: 
            return state;
    }
}


export default HeaderReducer;