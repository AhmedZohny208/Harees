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

// SUPERVISOR
import {
    allSupervisorsReducer,
    registerSupervisorReducer,
    supervisorDetailsReducer,
    SupervisorReducer
} from './Supervisor'

// TEAMLEAD
import {
    allTeamleadsReducer,
    registerTeamLeadReducer,
    teamLeadDetailsReducer,
    teamleadReducer
} from './TeamLead'

// TECHNICIANS
import {
    allTechniciansReducer,
    registerTechnicianReducer,
    technicianDetailsReducer,
    technicianReducer
} from './Technicians'

// TEAMS
import {
    allTeamsReducer,
    registerTeamReducer,
    teamDetailsReducer,
    teamReducer
} from './Teams'

const reducers = combineReducers({
    theme: Theme,

    ownerAuth: ownerAuthReducer,

    profileData: profileDataReducer,

    allAreas: allAreasReducer,

    allTenants: allTenantsReducer,
    registerTenant: registerTenantReducer,
    tenantDetails: tenantDetailsReducer,
    tenant: tenantReducer,

    allSupervisors: allSupervisorsReducer,
    registerSupervisor: registerSupervisorReducer,
    supervisorDetails: supervisorDetailsReducer,
    Supervisor: SupervisorReducer,

    allTeamleads: allTeamleadsReducer,
    registerTeamLead: registerTeamLeadReducer,
    teamLeadDetails: teamLeadDetailsReducer,
    teamlead: teamleadReducer,

    allTechnicians: allTechniciansReducer,
    registerTechnician: registerTechnicianReducer,
    technicianDetails: technicianDetailsReducer,
    technician: technicianReducer,

    allTeams: allTeamsReducer,
    registerTeam: registerTeamReducer,
    teamDetails: teamDetailsReducer,
    team: teamReducer
});

export default reducers;