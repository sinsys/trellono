import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from '../../STORE.js';

describe('List component', () => {
	it('Renders without crashing', () => {
		const store = {STORE};
		const div = document.createElement('div');
		const props = store.STORE.lists[0];
		ReactDOM.render(
			<List 
				id={"list-" + props.id}
      	title={props.header}
      	cards={props.cardIds.map(card => store.STORE.allCards[card])}
    	/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})