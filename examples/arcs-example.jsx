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
		this.state.arcList = [
			{
				origin: {
					latitude: 6.8770,
					longitude: 31.3
				},
				destination: {
					latitude: 37.09,
					longitude: 95.71
				}
			},
			{
				origin: {
					latitude: 6.8770,
					longitude: 31.3
				},
				destination: {
					latitude: 38.9,
					longitude: 35.24
				}
			},
			{
				origin: {
					latitude: 6.8770,
					longitude: 31.3
				},
				destination: {
					latitude: -25.27,
					longitude: 133.77
				}
			},
		]
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
						strokeWidth: 3,
						arcSharpness: 1.4
					}}
				/>
			</Example>
		);
	}

}

export default ArcsExample;