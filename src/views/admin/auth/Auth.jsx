import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Register, SendEmail } from "views/admin/auth";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
            <Route path="/admin/auth/login" exact component={ Login } />
            <Route path="/admin/auth/register" exact component={ Register } />
            <Route path="/admin/auth/password/email" exact component={ SendEmail } />
            <Redirect from="/admin/auth" to="/admin/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
