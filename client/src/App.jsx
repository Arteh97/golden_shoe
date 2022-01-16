import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Product from './components/Product';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/products'>
					<ProductList />
				</Route>
				<Route path='/products/:id'>
					<Product />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/pay'>
					<Pay />
				</Route>
				<Route path='/success'>
					<Success />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
