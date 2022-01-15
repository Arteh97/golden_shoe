import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const KEY =
	'sk_test_51KICtZFaPJhHfCTETnqmUQrwcAh1c1kOcxKQoVefaAAAzi7fxpkaDjKyVBtMrpIimgY5mlrXlM5ubrMo5uqiif2r00UM1jq6ac';

const Pay = () => {
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
			>
				<button
					style={{
						border: 'none',
						width: 120,
						borderRadius: 5,
						padding: '20px',
						backgroundColor: 'black',
						color: '600',
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
