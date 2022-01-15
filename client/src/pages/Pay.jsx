import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
const axios = require("axios");

const KEY =
	'pk_test_51KICtZFaPJhHfCTEtOVQ2Q1n5ZG8S3xi1yrOB7nz10nqTe6Rv0iwS6Wlj542qKf79EDfYyWuHmEeSkJA7EL7NRY300VyRM6c7L';

const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = token => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post(
					'http://localhost:5000/api/checkout/payment',
					{
						tokenId: stripeToken.id,
						amount: 7500,
					}
				);
				console.log(res.data);
			} catch (err) {
                console.log(err)
            };
            stripeToken && makeRequest
		}, [stripeToken]
	});

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<StripeCheckout
				name='Golden shoe'
				billingAddress
				shippingAddress
				description='Your total is $75'
				amount={7500}
				token={onToken}
				stripeKey={KEY}
			>
				<button
					style={{
						border: 'none',
						width: 120,
						borderRadius: 5,
						padding: '20px',
						backgroundColor: 'lightblue',
						cursor: 'pointer',
					}}
				>
					Pay Now
				</button>
			</StripeCheckout>
		</div>
	);
};

export default Pay;
