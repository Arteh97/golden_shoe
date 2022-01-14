import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Product from './components/Product';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
        <Route path='/products'>
          <ProductList />
        </Route>
        <Route path='/products/category'>
          <ProductList />
        </Route>
        <Route path='/products/:id'>
          <Product />
        </Route>
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
