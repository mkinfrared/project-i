import React from 'react';
import BuyButton from '../BuyButton/BuyButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import {Link} from 'react-router-dom';

export default function ComicDisplay(props) {
	let {comicList} = props;
	comicList = comicList.map((elem) => {

		const {id, thumbnail, title, quantity} = elem,
			  src                              = `${thumbnail.path}.${thumbnail.extension}`;

		return (<div key={id} className="shelfDisplay__item">
			<div className="shelfDisplay__item__cover ">
				<Link to={`/stock/comics/${id}`}><img src={`${src}`}
													  alt={`${title}`}/></Link>
				<DeleteButton data-item-id={id} handleClick={props.deleteComicBook}/>
			</div>
			<div className="shelfDisplay__item__title">{title}</div>
			<div className="shelfDisplay__item__buy-section">
				<BuyButton data-item-id={id} handleClick={props.buyComicBook}/>
				<div className="shelfDisplay__item__buy-section__price">$19.99</div>
			</div>
			<div
				className={`shelfDisplay__item__buy-section__quantity ${(quantity) ? '' : 'out-of-stock'}`}>{(quantity) ? `Only ${quantity} left in stock` : `Out of stock`}</div>
		</div>)
	});
	console.log(comicList);
	return (
		<div className="shelfDisplay_wrapper">{comicList}</div>
	);
};