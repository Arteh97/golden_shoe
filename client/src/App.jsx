import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
