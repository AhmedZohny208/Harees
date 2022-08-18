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

// TENANTS
import {
    allTenantsReducer,
    registerTenantReducer,
    tenantDetailsReducer,
    tenantReducer
} from './Tenants'

const reducers = combineReducers({
    theme: Theme,

    ownerAuth: ownerAuthReducer,

    profileData: profileDataReducer,

    allTenants: allTenantsReducer,
    registerTenant: registerTenantReducer,
    tenantDetails: tenantDetailsReducer,
    tenant: tenantReducer
});

export default reducers;