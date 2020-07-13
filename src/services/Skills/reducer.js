import * as actionTypes from './actionTypes';

const initialState = {
    skills: [
             {
                name: 'Skill',
                level: 'none'
             }, 
             {
                name: 'Beginner',
                level: 'beginner'
             }, 
             {
                name: 'Medium',
                level: 'medium'
             }, 
             {
                name: 'Expert',
                level: 'expert'
             }, 
             {
                name: 'Pro',
                level: 'pro'
             }, 
            ],
};


const SkillsReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SUBMIT_SKILLS: 
            return {...state, skills: action.value};
        default:
            return state;
    }
}


export default SkillsReducer;
