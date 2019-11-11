import React from 'react';
import Card from '../card/Card';
import './List.css';

export default function List(props){
	return (
		<section className="List">
			<header class="List-header">
				{props.title}
			</header>
			<div className="List-cards">
				{props.cards.map(card => (
					<p>{card}</p>
				))}
				{/* 
					The <p> is just filler and will be a <Card />.
					{card} will get passed in as a prop to display the correct card
				*/}

			</div>
		</section>
	)	
}