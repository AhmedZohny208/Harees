import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import ProtectedRoute from "components/util-components/ProtectedRoute";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        {/* HOME */}
        <ProtectedRoute exact path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />

        {/* COMPOUNDS */}
        <Route exact path={`${APP_PREFIX_PATH}/compounds`} component={lazy(() => import(`./compounds`))} />
        <Route path={`${APP_PREFIX_PATH}/compounds/create`} component={lazy(() => import(`./compounds/createCompound`))} />
        <Route path={`${APP_PREFIX_PATH}/compounds/update/:id`} component={lazy(() => import(`./compounds/updateCompound`))} />

        {/* ORGANIZATION */}
        <Route exact path={`${APP_PREFIX_PATH}/organization`} component={lazy(() => import(`./organization`))} />
        <Route path={`${APP_PREFIX_PATH}/organization/create`} component={lazy(() => import(`./organization/create`))} />
        <Route path={`${APP_PREFIX_PATH}/organization/update/:id`} component={lazy(() => import(`./organization/update`))} />

        {/* PACKAGES */}
        <Route exact path={`${APP_PREFIX_PATH}/packages`} component={lazy(() => import(`./packages`))} />
        <Route path={`${APP_PREFIX_PATH}/packages/create`} component={lazy(() => import(`./packages/create`))} />
        <Route path={`${APP_PREFIX_PATH}/packages/update/:id`} component={lazy(() => import(`./packages/update`))} />

        {/* INVOICES */}
        <Route exact path={`${APP_PREFIX_PATH}/invoices`} component={lazy(() => import(`./invoices`))} />
        <Route path={`${APP_PREFIX_PATH}/invoices/create`} component={lazy(() => import(`./invoices/create`))} />
        <Route path={`${APP_PREFIX_PATH}/invoices/update/:id`} component={lazy(() => import(`./invoices/update`))} />

        {/* REPORTS */}
        <Route exact path={`${APP_PREFIX_PATH}/reports`} component={lazy(() => import(`./reports`))} />

        {/* OPERATOR */}
        <Route exact path={`${APP_PREFIX_PATH}/operator`} component={lazy(() => import(`./operator`))} />
        <Route path={`${APP_PREFIX_PATH}/operator/create`} component={lazy(() => import(`./operator/create`))} />
        <Route path={`${APP_PREFIX_PATH}/operator/update/:id`} component={lazy(() => import(`./operator/update`))} />

        {/* SERVICES */}
        <Route exact path={`${APP_PREFIX_PATH}/services`} component={lazy(() => import(`./services`))} />

        {/* TENANTS */}
        <Route exact path={`${APP_PREFIX_PATH}/tenants`} component={lazy(() => import(`./tenants`))} />
        <Route path={`${APP_PREFIX_PATH}/tenants/create`} component={lazy(() => import(`./tenants/create`))} />
        <Route path={`${APP_PREFIX_PATH}/tenants/update/:id`} component={lazy(() => import(`./tenants/update`))} />

        {/* SUPERVISORS */}
        <Route exact path={`${APP_PREFIX_PATH}/supervisors`} component={lazy(() => import(`./supervisors`))} />
        <Route path={`${APP_PREFIX_PATH}/supervisors/create`} component={lazy(() => import(`./supervisors/createSupervisor`))} />
        <Route path={`${APP_PREFIX_PATH}/supervisors/update/:id`} component={lazy(() => import(`./supervisors/updateSupervisor`))} />

        {/* Technician */}
        <Route exact path={`${APP_PREFIX_PATH}/technician`} component={lazy(() => import(`./technician`))} />
        <Route path={`${APP_PREFIX_PATH}/technician/create`} component={lazy(() => import(`./technician/create`))} />
        <Route path={`${APP_PREFIX_PATH}/technician/update/:id`} component={lazy(() => import(`./technician/update`))} />

        {/* TEAMS */}
        <Route exact path={`${APP_PREFIX_PATH}/teams`} component={lazy(() => import(`./teams`))} />
        <Route path={`${APP_PREFIX_PATH}/teams/create`} component={lazy(() => import(`./teams/create`))} />
        <Route path={`${APP_PREFIX_PATH}/teams/update/:id`} component={lazy(() => import(`./teams/update`))} />

        <Route exact path={`${APP_PREFIX_PATH}/home/compound-admins`} component={lazy(() => import(`./compoundAdmins`))} />
        <Route path={`${APP_PREFIX_PATH}/home/compound-admins/create`} component={lazy(() => import(`./compoundAdmins/create`))} />
        <Route path={`${APP_PREFIX_PATH}/home/compound-admins/update/:id`} component={lazy(() => import(`./compoundAdmins/update`))} />
        <Route path={`${APP_PREFIX_PATH}/home/statistics`} component={lazy(() => import(`./statistics`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);