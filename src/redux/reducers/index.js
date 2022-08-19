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

// AREAS
import {
    allAreasReducer
} from './Areas'

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

    allAreas: allAreasReducer,

    allTenants: allTenantsReducer,
    registerTenant: registerTenantReducer,
    tenantDetails: tenantDetailsReducer,
    tenant: tenantReducer
});

export default reducers;