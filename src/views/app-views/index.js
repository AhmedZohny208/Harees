import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import ProtectedRoute from "components/util-components/ProtectedRoute";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        {/* HOME */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />

        {/* EDIT PROFILE */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/me/update`} component={lazy(() => import(`./editProfile`))} />

        {/* COMPOUNDS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/compounds`} component={lazy(() => import(`./compounds`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/compounds/create`} component={lazy(() => import(`./compounds/createCompound`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/compounds/update/:id`} component={lazy(() => import(`./compounds/updateCompound`))} />

        {/* AREAS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/areas`} component={lazy(() => import(`./areas`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/areas/create`} component={lazy(() => import(`./areas/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/areas/update/:id`} component={lazy(() => import(`./areas/update`))} />

        {/* ORGANIZATION */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/organization`} component={lazy(() => import(`./organization`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/organization/create`} component={lazy(() => import(`./organization/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/organization/update/:id`} component={lazy(() => import(`./organization/update`))} />

        {/* PACKAGES */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/packages`} component={lazy(() => import(`./packages`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/packages/create`} component={lazy(() => import(`./packages/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/packages/update/:id`} component={lazy(() => import(`./packages/update`))} />

        {/* INVOICES */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/invoices`} component={lazy(() => import(`./invoices`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/invoices/create`} component={lazy(() => import(`./invoices/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/invoices/update/:id`} component={lazy(() => import(`./invoices/update`))} />

        {/* REPORTS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/reports`} component={lazy(() => import(`./reports`))} />

        {/* OPERATOR */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/operator`} component={lazy(() => import(`./operator`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/operator/create`} component={lazy(() => import(`./operator/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/operator/update/:id`} component={lazy(() => import(`./operator/update`))} />

        {/* SERVICES */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/services`} component={lazy(() => import(`./services`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/services/create`} component={lazy(() => import(`./services/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/services/update/:id`} component={lazy(() => import(`./services/update`))} />

        {/* TENANTS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/tenants`} component={lazy(() => import(`./tenants`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/tenants/create`} component={lazy(() => import(`./tenants/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/tenants/update/:id`} component={lazy(() => import(`./tenants/update`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/tenants/:id`} component={lazy(() => import(`./tenants/details`))} />

        {/* SUPERVISORS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/supervisors`} component={lazy(() => import(`./supervisors`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/supervisors/create`} component={lazy(() => import(`./supervisors/createSupervisor`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/supervisors/update/:id`} component={lazy(() => import(`./supervisors/updateSupervisor`))} />

        {/* Technician */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/technician`} component={lazy(() => import(`./technician`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/technician/create`} component={lazy(() => import(`./technician/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/technician/update/:id`} component={lazy(() => import(`./technician/update`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/technician/:id`} component={lazy(() => import(`./technician/details`))} />

        {/* TEAMS */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/teams`} component={lazy(() => import(`./teams`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/teams/create`} component={lazy(() => import(`./teams/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/teams/update/:id`} component={lazy(() => import(`./teams/update`))} />

        {/* TEAM LEAD */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/teamlead`} component={lazy(() => import(`./teamlead`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/teamlead/create`} component={lazy(() => import(`./teamlead/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/teamlead/update/:id`} component={lazy(() => import(`./teamlead/update`))} />

        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/home/compound-admins`} component={lazy(() => import(`./compoundAdmins`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/home/compound-admins/create`} component={lazy(() => import(`./compoundAdmins/create`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/home/compound-admins/update/:id`} component={lazy(() => import(`./compoundAdmins/update`))} />
        <ProtectedRoute path={`${APP_PREFIX_PATH}/home/statistics`} component={lazy(() => import(`./statistics`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);