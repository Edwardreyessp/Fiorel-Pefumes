'use client';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export const PayPalButton = (): JSX.Element => {
	return (
		<PayPalScriptProvider
			options={{
				clientId:
					'AXUXnn8IzVHbG_QHTUFgWAciPzz5CupPYcuxs0K86GdHcYozPAifnw9NpFT4NzWmMMakIhCm-E2y45f3',
			}}
		>
			<PayPalButtons
				style={{ layout: 'vertical' }}
				createOrder={async () => {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/carrito`,
						{
							method: 'POST',
						},
					);
					const order = await res.json();
					console.log(order);
					return order.id;
				}}
				onApprove={async (data, actions) => {
					console.log(data);
					await actions.order?.capture();
				}}
				onCancel={data => {
					console.log(data);
				}}
			/>
		</PayPalScriptProvider>
	);
};
