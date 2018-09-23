import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ArcsExample from './arcs-example';
import Home from "./home";

class App extends React.Component {

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" exact render={(props) => <Home />} />
						<Route path="/map" exact render={(props) => <ArcsExample />} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
