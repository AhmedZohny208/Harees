import { combineReducers } from 'redux';
import Theme from './Theme';

// AUTH
import {
    ownerAuthReducer
} from './Auth';

// PROFILE
import {
    profileDataReducer
} from './Profile'

const reducers = combineReducers({
    theme: Theme,

    ownerAuth: ownerAuthReducer,

    profileData: profileDataReducer
});

export default reducers;