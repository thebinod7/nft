import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../modules/dashboard';
import Login from '../modules/auth/login';

import 'bootstrap/dist/css/bootstrap.min.css';

const auth = { user: 'John Doe', role: 'Admin' };

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					{auth ? <Route component={Dashboard} /> : <Redirect to="/login" />}
				</Switch>
			</Router>
		</>
	);
}

export default App;
