import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../src/components/organisms/Header/Header';
import Orders from '../src/components/pages/Orders/Orders';
import Dashboard from '../src/components/pages/Dashboard/Dasboard';
import Financials from '../src/components/pages/Financials/Financials';
import Support from '../src/components/pages/Support/Support';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="page_content">
					<Header />
					<Switch>
						<Route path="/" component={Orders} exact />
						<Route path="/orders" component={Orders} exact />
						<Route path="/dashboard" component={Dashboard} exact />
						<Route path="/financials" component={Financials} exact />
						<Route path="/support" component={Support} exact />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
