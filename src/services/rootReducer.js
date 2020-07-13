import { combineReducers } from 'redux';

import HeaderReducer from './Header/reducer';
import PersonalInfoReducer from './PersonalInfo/reducer';
import SkillsReducer from './Skills/reducer';

const rootReducer = combineReducers({
    headerState: HeaderReducer,
    personalInfoState: PersonalInfoReducer,
    skillsState: SkillsReducer,
});

export default rootReducer;
