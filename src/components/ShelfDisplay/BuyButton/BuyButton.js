import React from 'react';
import './BuyButton.css'


export default function BuyButton(props) {
	return (
		<button className="BuyButton" onClick={() => props.handleClick(props['data-item-id'])}>Buy</button>
	)
};