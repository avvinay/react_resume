import * as actionTypes from './actionTypes';

export const submitPersonalInfo = personalInfo => {
    return {
        type: actionTypes.SUBMIT_PERSONAL_INFO,
        value: personalInfo
    }
}