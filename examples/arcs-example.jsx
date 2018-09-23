import React from 'react';
import Datamap from '../src';
import Example from './example';

class ArcsExample extends React.Component {

	state = {
		arcList: null
	}

	render() {

		const country = this.props.match.params.country;
		console.log(country);
		this.state.arcList = []
		for (let i = 0; i < 3; ++i) {
			let lat = Math.random() * 85
			let long = Math.random() * 180
			let lat2 = Math.random() * -85
			let long2 = Math.random() * -180
			this.state.arcList.push({origin: {latitude: lat, longitude: long}, destination: {latitude: lat2, longitude: long2}})
		}
		if (this.state.arcList === null) {
			return <div>Hello World</div>
		}
		return (
			<Example label="Arcs">
				<Datamap
					scope="world"
					fills={{
						defaultFill: '#000',
						win: '#0fa0fa',
					}}
					// data={{
					// }}
					arc={this.state.arcList}
					arcOptions={{
						strokeWidth: 1,
						arcSharpness: 1.4
					}}
				/>
			</Example>
		);
	}

}

export default ArcsExample;