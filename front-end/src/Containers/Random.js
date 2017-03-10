import React, {Component} from 'react';
import { Link } from 'react-router';


class Random extends Component {
	render() {
		return (
		<div className="container-images">
			<div className="card-images row">
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
			</div>
			
			<div className="card-images row">
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
				<img className="card-image" src="http://placehold.it/216x289" />
				<p>Stuff</p>
			</div>
			
		</div>
		)
	}
}

export default Random;