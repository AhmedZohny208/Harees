import { combineReducers } from 'redux';
import Theme from './Theme';

// OWNER AUTH REDUCERS
import {
    ownerAuthReducer
} from './Auth';

const reducers = combineReducers({
    theme: Theme,

    ownerAuth: ownerAuthReducer
});

export default reducers;