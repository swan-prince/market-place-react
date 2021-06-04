import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "assets/styles/style.css";

import { Admin } from "layouts";

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";

const App = () => {

	return(
		<Router>
			<Switch>
				<Route path="/admin" component={ Admin } />
				<Route path="/landing" exact component={ Landing } />
				<Route path="/profile" exact component={ Profile } />
				<Route path="/" exact component={ Landing } />
				{/* <Redirect from="*" to="/landing" /> */}
			</Switch>
		</Router>
	)
}

export default App;