import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import { useEffect, useState } from 'react';
const axios = require('axios');

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios
					.get('http://localhost:5001/api/products')
					.then(() => {
						console.log(res);
					});
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
	}, []);

	return (
		<Container>
			{popularProducts.map(item => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
