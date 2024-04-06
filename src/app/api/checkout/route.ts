import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET;

if (clientId === undefined || clientSecret === undefined) {
	throw new Error(
		'PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET not defined in environment variables',
	);
}

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST(): Promise<NextResponse> {
	const request = new paypal.orders.OrdersCreateRequest();

	request.requestBody({
		intent: 'CAPTURE',
		purchase_units: [
			{
				amount: {
					currency_code: 'MXN',
					value: '200.00',
					breakdown: {
						discount: {
							currency_code: 'MXN',
							value: '0.00',
						},
						handling: {
							currency_code: 'MXN',
							value: '0.00',
						},
						insurance: {
							currency_code: 'MXN',
							value: '0.00',
						},
						shipping: {
							currency_code: 'MXN',
							value: '0.00',
						},
						shipping_discount: {
							currency_code: 'MXN',
							value: '0.00',
						},
						tax_total: {
							currency_code: 'MXN',
							value: '0.00',
						},
						item_total: {
							currency_code: 'MXN',
							value: '200.00',
						},
					},
				},
				// items: [
				// 	{
				// 		name: 'Test Item',
				// 		description: 'Test Item Description',
				// 		quantity: '1',
				// 		category: 'PHYSICAL_GOODS',
				// 		unit_amount: {
				// 			currency_code: 'MXN',
				// 			value: '100.00',
				// 		},
				// 	},
				// 	{
				// 		name: 'Test Item 2',
				// 		description: 'Test Item Description 2',
				// 		quantity: '1',
				// 		category: 'PHYSICAL_GOODS',
				// 		unit_amount: {
				// 			currency_code: 'MXN',
				// 			value: '100.00',
				// 		},
				// 	},
				// ],
			},
		],
	});

	const response = await client.execute(request);
	console.log(response.result);

	return NextResponse.json({ id: response.result.id });
}
