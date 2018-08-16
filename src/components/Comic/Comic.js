import React, {Component} from 'react';
import axios from 'axios';


class Comic extends Component {
	constructor() {
		super();
		this.state = {
			comicDetails: [],
			uri         : ''
		}
	}
	
	componentWillMount() {
		let {id} = this.props.match.params;
		axios.get(`/stock/comics/${id}`).then((resp) => {
			this.setState({
				comicDetails: resp.data,
				uri         : resp.data[0].characters.collectionURI
			});
		});
	}
	
	render() {
		let link = this.state.uri;
		axios.post(`/marvel/URI/`, {link: link}).then((resp) => console.log(resp));
		let arr = this.state.comicDetails.map((elem) => {
			elem = <div key={elem.id}>
				<img src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} alt={`${elem.title}`}/>
				<h4>Description</h4>
				<p>{elem.description}</p>
				<h4>Page Count</h4>
				<p>{elem.pageCount}</p>
			</div>;
			return elem;
		});
		return (
			<div>
				{arr}
			</div>
		)
	}
}

export default Comic;