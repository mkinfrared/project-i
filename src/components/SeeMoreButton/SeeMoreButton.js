import React from 'react';
import './SeeMoreButton.css'

export default function SeeMoreButton(props) {
	return(
		<div>
			<button className="see-more-button" onClick={props.handleClick}>See More</button>
		</div>
	)
}

