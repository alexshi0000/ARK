import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router';
import ArcsExample from './arcs-example';

class App extends React.Component {

	render() {
		return (
			// <Router>
				<div className="App">
					{/* <Route path="/" component={ArcsExample} /> */}
					<ArcsExample />
				</div>
			// </Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
