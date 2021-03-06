import React, { useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../partials/header';
import Footer from '../../partials/footer';
import Home from './home';
import CreateNFT from '../../views/nfts/Create';

import { getWeb3 } from '../../utils';

export default function Index() {
	const loadWeb3 = useCallback(async () => {
		const web3 = await getWeb3();
		const accounts = await web3.eth.getAccounts();
		console.log('Account==>', accounts);
	}, []);

	useEffect(() => {
		loadWeb3();
	}, [loadWeb3]);

	return (
		<div style={{ padding: 30 }}>
			<Header />
			{/* <Sidebar /> */}
			<div className="container" style={{ marginTop: 40 }}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/create" component={CreateNFT} />

					{/* OTHER DASHBOARD ROUTES GOES HERE */}
				</Switch>
				<Footer />
			</div>
		</div>
	);
}
