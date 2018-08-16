import React from 'react';
import './DeleteButton.css'

export default function Delete(props) {
    return(
	    <button className="delete-button" onClick={() => props.handleClick(props['data-item-id'])}>X</button>
    )
}