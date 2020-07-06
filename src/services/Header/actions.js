import * as actionTypes from './actionTypes';

export const submitHeader = header => {
    return {
        type: actionTypes.SUBMIT_HEADER,
        value: header // { name: val, profession: val, brief: ''}
    }
}