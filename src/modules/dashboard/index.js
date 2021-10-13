import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../partials/header';
import Footer from '../../partials/footer';
import Home from './home';
import CreateNFT from '../../views/nfts/Create';

export default function Index() {
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
