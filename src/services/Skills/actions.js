import * as actionTypes from './actionTypes';

export const submitSkills = (skills) => {
    return {
        type: actionTypes.SUBMIT_SKILLS,
        value: skills
    }
};


