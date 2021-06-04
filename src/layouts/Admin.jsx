import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import AdminView from "views/admin/AdminView";
import Auth from "views/admin/auth/Auth";

export default function Admin() {
  return (
    <>
      <Switch>
        <Route path="/admin/auth" component={ Auth } />

        <Route path="/admin/dashboard" component={ AdminView } />

        <Route path="/admin/categories" component={ AdminView } />
        <Route path="/admin/category/create" component={ AdminView } />
        <Route path="/admin/category/:id/edit" component={ AdminView } />
        <Route path="/admin/fields" component={ AdminView } />
        <Route path="/admin/pricing-models" component={ AdminView } />

        <Route path="/admin/users" component={ AdminView } />
        <Route path="/admin/user/:id/edit" component={ AdminView } />
        <Route path="/admin/user/create" component={ AdminView } />
        <Route path="/admin/roles" component={ AdminView } />

        <Route path="/admin/moderate-users" component={ AdminView } />
        <Route path="/admin/moderate-listings" component={ AdminView } />
        <Route path="/admin/moderate-report-types" component={ AdminView } />

        <Route path="/admin/settings" component={ AdminView } />
        <Route path="/admin/languages" component={ AdminView } />
        <Route path="/admin/meta-tags" component={ AdminView } />
        <Route path="/admin/blocklist" component={ AdminView } />
        <Redirect from="/admin" to="/admin/auth" />
      </Switch>
    </>
  );
}
