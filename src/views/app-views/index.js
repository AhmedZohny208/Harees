import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        {/* HOME */}
        <Route exact path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />

        {/* COMPOUNDS */}
        <Route exact path={`${APP_PREFIX_PATH}/home/compounds`} component={lazy(() => import(`./compounds`))} />
        <Route path={`${APP_PREFIX_PATH}/home/compounds/create`} component={lazy(() => import(`./compounds/create`))} />
        <Route path={`${APP_PREFIX_PATH}/home/compounds/update/:id`} component={lazy(() => import(`./compounds/update`))} />
        {/* ORGANIZATION */}
        <Route exact path={`${APP_PREFIX_PATH}/organization`} component={lazy(() => import(`./organization`))} />
        <Route path={`${APP_PREFIX_PATH}/organization/create`} component={lazy(() => import(`./organization/create`))} />
        {/*
        <Route path={`${APP_PREFIX_PATH}/organization/update/:id`} component={lazy(() => import(`./organization/update`))} /> */}
        {/* PACKAGES */}
        <Route exact path={`${APP_PREFIX_PATH}/packages`} component={lazy(() => import(`./packages`))} />
        <Route path={`${APP_PREFIX_PATH}/packages/create`} component={lazy(() => import(`./packages/create`))} />
        {/*
        <Route path={`${APP_PREFIX_PATH}/packages/update/:id`} component={lazy(() => import(`./packages/update`))} /> */}
        {/* INVOICES */}
        <Route exact path={`${APP_PREFIX_PATH}/invoices`} component={lazy(() => import(`./invoices`))} />
        <Route path={`${APP_PREFIX_PATH}/invoices/create`} component={lazy(() => import(`./invoices/create`))} />
        {/* 
        <Route path={`${APP_PREFIX_PATH}/invoices/update/:id`} component={lazy(() => import(`./invoices/update`))} /> */}
        {/* REPORTS */}
        <Route exact path={`${APP_PREFIX_PATH}/reports`} component={lazy(() => import(`./reports`))} />
        {/* <Route path={`${APP_PREFIX_PATH}/reports/create`} component={lazy(() => import(`./reports/create`))} />
        <Route path={`${APP_PREFIX_PATH}/reports/update/:id`} component={lazy(() => import(`./reports/update`))} /> */}
        {/* OPERATOR */}
        <Route exact path={`${APP_PREFIX_PATH}/operator`} component={lazy(() => import(`./operator`))} />
        <Route path={`${APP_PREFIX_PATH}/operator/create`} component={lazy(() => import(`./operator/create`))} />
        {/* 
        <Route path={`${APP_PREFIX_PATH}/operator/update/:id`} component={lazy(() => import(`./operator/update`))} /> */}
        
        <Route exact path={`${APP_PREFIX_PATH}/home/supervisors`} component={lazy(() => import(`./supervisors`))} />
        <Route path={`${APP_PREFIX_PATH}/home/supervisors/create`} component={lazy(() => import(`./supervisors/createSupervisor`))} />
        <Route path={`${APP_PREFIX_PATH}/home/supervisors/update/:id`} component={lazy(() => import(`./supervisors/updateSupervisor`))} />
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