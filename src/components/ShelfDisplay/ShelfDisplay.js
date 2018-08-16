import React, {Component} from 'react';
import axios from 'axios';
import './ShelfDisplay.css';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';
import BuyButton from './BuyButton/BuyButton';
import DeleteButton from './DeleteButton/DeleteButton';
import {Link} from 'react-router-dom';
import ComicDisplay from './ComicDisplay/ComicDisplay';

class ShelfDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shelf      : [],
			id         : '',
			title      : '',
			description: '',
			quantity   : '',
			thumbnail  : ''
		};

		this.componentWillMount = this.componentWillMount.bind(this),
			this.buyComicBook = this.buyComicBook.bind(this),
			this.deleteComicBook = this.deleteComicBook.bind(this),
			this.addComicBook = this.addComicBook.bind(this),
			this.handleChange = this.handleChange.bind(this);
	}

	buyComicBook(id) {
		axios.put(`/stock/comics/${id}`).then((resp) => {
			this.setState({shelf: resp.data.slice(0, 16)});
		});
	}

	deleteComicBook(id) {
		axios.delete(`/stock/comics/${id}`).then((resp) => {
			this.setState({shelf: resp.data.slice(0, 16)});
		})
	}

	componentWillMount() {
		let start = this.state.shelf.length;
		let end = start + 16;
		axios.get('/stock/comics').then((resp) => {
			let arr = resp.data.filter((elem, index) => {
				return index < end;
			});
			this.setState({shelf: arr});
		});
	}

	handleChange(evt) {
		this.setState({[evt.target.name]: evt.target.value});
	}

	addComicBook() {
		let {thumbnail, id, title, description, quantity} = this.state;
		if (thumbnail.substr(thumbnail.length - 4) === '.jpg') {
			if (id && title && description && quantity) {
				axios.post('/stock/comics', {
					title      : this.state.title,
					id         : this.state.id,
					description: this.state.description,
					thumbnail  : this.state.thumbnail,
					quantity   : this.state.quantity
				}).then((resp) => {
					this.setState({
						shelf      : resp.data.slice(0, 16),
						id         : '',
						title      : '',
						thumbnail  : '',
						description: '',
						quantity   : ''
					});
				});
			} else {
				alert('All the fields must be filled');
			}
		} else {
			alert("Enter a valid URL to a .jpg picture");
		}
	}

	render() {
		const {shelf} = this.state;
		let arr = this.state.shelf.map((elem) => {
			elem = <div key={elem.id} id={elem.id} className="shelfDisplay__item">
				<div className="shelfDisplay__item__cover ">
					<Link to={`/stock/comics/${elem.id}`}><img
						src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} alt={`${elem.title}`}/></Link>
					<DeleteButton data-item-id={elem.id} handleClick={this.deleteComicBook}/>
				</div>
				<div className="shelfDisplay__item__title">{elem.title}</div>
				<div className="shelfDisplay__item__buy-section">
					<BuyButton data-item-id={elem.id} handleClick={this.buyComicBook}/>
					<div className="shelfDisplay__item__buy-section__price">$19.99</div>
				</div>
				<div
					className={`shelfDisplay__item__buy-section__quantity ${(elem.quantity) ? '' : 'out-of-stock'}`}>{(elem.quantity) ? `Only ${elem.quantity} left in stock` : `Out of stock`}</div>
			</div>;
			return elem;
		});
		return (
			<div>
				<div className="shelfDisplay">
					<h1>See what we have in store for you</h1>
					<ComicDisplay comicList={shelf} buyComicBook={this.buyComicBook}
								  deleteComicBook={this.deleteComicBook}/>
					<SeeMoreButton handleClick={this.componentWillMount}/>
				</div>
				<div className="shelfDisplay__add-section">
					<h1>Create your own comic here!</h1>
					<div className="shelfDisplay__input-fields">
						<div>
							<input key={'thumbnail'} name="thumbnail" type="text"
								   placeholder="Insert your comic book URL here"
								   onChange={(e) => this.handleChange(e)} value={this.state.thumbnail}/>
							<input key={'id'} name="id" type="text" placeholder="Your comic book will need an ID"
								   onChange={(e) => this.handleChange(e)} value={this.state.id}/>
							<input key={'title'} name="title" type="text" placeholder="Now give it a title"
								   onChange={(e) => this.handleChange(e)} value={this.state.title}/>
							<input key={'description'} name="description" type="text"
								   placeholder="And a brief description"
								   onChange={(e) => this.handleChange(e)} value={this.state.description}/>
							<input key={'quantity'} name="quantity" type="text"
								   placeholder="Tell us how many items you have"
								   onChange={(e) => this.handleChange(e)} value={this.state.quantity}/>
						</div>
						<div>
							<button onClick={this.addComicBook}>Add comic book</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShelfDisplay;