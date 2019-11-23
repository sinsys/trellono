import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import STORE from '../../STORE.js';

describe('Card component', () => {
	it('Renders without crashing', () => {
		const store = {STORE};
		const div = document.createElement('div');
		const props = store.STORE.allCards['a'];
		ReactDOM.render(
			<Card
				id={props.id}
				title={props.title}
				content={props.content}
    	/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})