import React from 'react';
import Card from '../card/Card';
import './List.css';

export default function List(props){
	return (
		<section className="List">
			<header class="List-header">
				<h2>{props.title}</h2>
			</header>
			<div className="List-cards">
				{props.cards.map(card => (
					<Card
						id={card.id}
						title={card.title}
						content={card.content}
					/>
				))}
				<button
					type="button"
					className="List-add-button"
				>
					+ Add Card
				</button>
			</div>
		</section>
	)	
}