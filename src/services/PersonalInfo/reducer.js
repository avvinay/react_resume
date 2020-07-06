import * as actionTypes from './actionTypes';

const initialState = {
    email: 'johndoe@gmail.com',
    mobile_number: '+91-9848012345',
    location: 'Newyork, USA',
    social_media: [],
}

const PersonalInfoReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SUBMIT_PERSONAL_INFO: 
            console.log(action.value);
            return {...state, email: action.value.email, mobile_number: action.value.mobile_number, location: action.value.location, social_media: [...state.social_media, action.value.social_media]};

        default: 
            return state;
    }

};

export default PersonalInfoReducer;

