import { combineReducers } from 'redux';

import HeaderReducer from './Header/reducer';
import PersonalInfoReducer from './PersonalInfo/reducer';

const rootReducer = combineReducers({
    headerState: HeaderReducer,
    personalInfoState: PersonalInfoReducer,
});

export default rootReducer;
