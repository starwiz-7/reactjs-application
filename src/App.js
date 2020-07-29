import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Login from "./screens/authentication/Login/Login";
import SignUp from "./screens/authentication/SignUp/SignUp";
import Drawer from "./components/Drawer/CustomDrawer";
import Dashboard from "./screens/mainApp/DashBoard/DashBoard";
import ForgotPassword from "./screens/authentication/ForgotPassword/ForgotPassword";
import SuccessfulPasswordReset from "./screens/authentication/SuccessfulPasswordReset/SuccessfulPasswordReset";
import ResetPassword from "./screens/authentication/ResetPassword/ResetPassword";
import City from "./screens/mainApp/Master/City/City";

function App() {
	let routes = (
		<Switch>
			<Route path="/login" render={(props) => <Login />} />
			<Route path="/signup" render={(props) => <SignUp />} />
			<Route
				path="/forgot-password"
				render={(props) => <ForgotPassword />}
			/>
			<Route
				path="/reset-password"
				render={(props) => <ResetPassword />}
			/>
			<Route
				path="/password-reset-successful"
				render={(props) => <SuccessfulPasswordReset />}
			/>
			<Route path="/" exact render={(props) => <Drawer></Drawer>} />
			<Redirect to="/" />
		</Switch>
	);
	return <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>;
}

export default App;
