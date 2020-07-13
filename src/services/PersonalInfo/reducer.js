import * as actionTypes from './actionTypes';

const initialState = {
    email: 'johndoe@gmail.com',
    mobile_number: '+91-9848012345',
    location: 'Newyork, USA',
    social_media: [{type: 'linkedin', url: 'www.linkedin.com'},{type: 'github', url: 'www.github.com'},{type: 'facebook', url: 'www.facebook.com'},{type: 'twitter', url: 'www.twitter.com'},],
}

const PersonalInfoReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SUBMIT_PERSONAL_INFO: 
            console.log(action.value);
            return {...state, ...action.value};
            // return {...state, email: action.value.email, mobile_number: action.value.mobile_number, location: action.value.location, social_media: action.value.social_media};

        default: 
            return state;
    }

};

export default PersonalInfoReducer;

