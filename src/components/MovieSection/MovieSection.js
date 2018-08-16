import React, {Component} from 'react';
import axios from 'axios';
import './MovieSection.css';


class MovieSection extends Component {
	constructor() {
		super();
		this.state           = {
			moviesOnDisplay: [],
			tmdbKey        : '386fa288d584c18494b71dc764f9fd67',
			imgSrc         : 'https://image.tmdb.org/t/p/original'
		};
		this.results         = [];
		this.searchDecorator = this.searchDecorator.bind(this);
	}
	
	componentDidMount() {
		this.searchDecorator('avengers');
		this.searchDecorator('thor');
		this.searchDecorator('captain america');
		this.searchDecorator('iron man');
	}
	
	searchDecorator(title) {
		let {tmdbKey, moviesOnDisplay} = this.state;
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${title}`).then((resp) => {
			this.results.push(resp.data.results[0], resp.data.results[1], resp.data.results[2]);
			console.log(this.results);
			this.setState({moviesOnDisplay: this.results});
		});
	}
	
	render() {
		let {moviesOnDisplay, imgSrc} = this.state;
		
		
		let arr = moviesOnDisplay.map((elem) => {
			elem = <div key={elem.id} className="movie-section-item">
				<img src={`${imgSrc}${elem['poster_path']}`} alt={elem.title}/>
				<div className="movie-title">
					<p>{elem.title}</p>
				</div>
			</div>;
			return elem;
		});
		console.log(arr);
		return (
			<div className="movie-section">
				<h1>Check out dvd from our partner</h1>
				<div className="movie-section-dvd">
					{arr}
				</div>
			</div>
		)
	}
	
};


export default MovieSection;