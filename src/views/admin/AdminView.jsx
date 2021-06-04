import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import { AdminSidebar } from "components/Sidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import { Dashboard } from "views/admin/Dashboard";
import { Categories, CreateCategory, EditCategory, Fields, PricingModels } from "views/admin/Categories";
import { Users, CreateUser, EditUser, Roles } from "views/admin/Users";
import { ReporedtListings, ReportedUsers, EditListing, EditReportedUser } from "views/admin/Reports";
import { Settings, Languages, MetaTags, BlockList } from "views/admin/Settings";

export default function AdminView() {
  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64 bg-color-2 min-h-100-vh">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={ Dashboard } />

            <Route path="/admin/users" exact component={ Users } />
            <Route path="/admin/user/:id/edit" exact component={ EditUser } />
            <Route path="/admin/user/create" exact component={ CreateUser } />
            <Route path="/admin/roles" exact component={ Roles } />

            <Route path="/admin/categories" exact component={ Categories } />
            <Route path="/admin/category/create" exact component={ CreateCategory } />
            <Route path="/admin/category/:id/edit" exact component={ EditCategory } />
            <Route path="/admin/fields" exact component={ Fields } />
            <Route path="/admin/pricing-models" exact component={ PricingModels } />

            <Route path="/admin/moderate-users" exact component={ ReportedUsers } />
            <Route path="/admin/moderate-listings" exact component={ EditReportedUser } />
            <Route path="/admin/moderate-report-types" exact component={ ReporedtListings } />
            <Route path="/admin/reports/listings/:id/edit" exact component={ EditListing } />

            <Route path="/admin/settings" exact component={ Settings } />
            <Route path="/admin/languages" exact component={ Languages } />
            <Route path="/admin/meta-tags" exact component={ MetaTags } />
            <Route path="/admin/blocklist" exact component={ BlockList } />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
