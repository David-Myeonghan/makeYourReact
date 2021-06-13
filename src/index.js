/* @jsx createElement*/
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
	render() {
		return <p>This is your Title!</p>;
	}
}

function Title(props) {
	return (
		<div>
			<h2>이게 되냐?</h2>
			<YourTitle />
			<p>Working</p>
		</div>
	);
}

// console.log(Title());
render(<Title />, document.querySelector('#root'));
