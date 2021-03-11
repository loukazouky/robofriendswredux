import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if(true) {
	// 	throw new Error('ERROR!');
	// }
return (
	<div>
	{
		robots.map((user, i) => { 
			return (
				<Card 
				id={robots[i].id} 
				key= {robots[i].id}
				name={robots[i].name} 
				email={robots[i].email}
				/>
				);
		})
	}
	</div>
	);
}

export default CardList;