import { combineReducers } from 'redux';
import Theme from './Theme';

// AUTH
import {
    ownerAuthReducer
} from './Auth';

// PROFILE
import {
    profileDataReducer,
    updateMeReducer
} from './Profile'

// AREAS
import {
    allAreasReducer,
    registerAreaReducer,
    areaDetailsReducer,
    areaReducer
} from './Areas'

// SERVICES
import {
    allServicesReducer,
    registerServiceReducer,
    serviceDetailsReducer,
    servicesReducer
} from './Services'

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

// STATISTICS
import {
    compoundStatisticsReducer,
    getDomHistogramDataReducer
} from './Statistics'

const reducers = combineReducers({
    theme: Theme,

    ownerAuth: ownerAuthReducer,

    profileData: profileDataReducer,
    updateMe: updateMeReducer,

    allAreas: allAreasReducer,
    registerArea: registerAreaReducer,
    areaDetails: areaDetailsReducer,
    area: areaReducer,

    allServices: allServicesReducer,
    registerService: registerServiceReducer,
    serviceDetails: serviceDetailsReducer,
    services: servicesReducer,

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
    team: teamReducer,

    compoundStatistics: compoundStatisticsReducer,
    getDomHistogramData: getDomHistogramDataReducer
});

export default reducers;