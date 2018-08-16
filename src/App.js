import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import router from './components/router';


class App extends Component {
	constructor() {
		super();
	}
	
	getExtComics() {
		axios.get('/stock/comics/marvel/').then((response) => {
			let arr = response.data.results.map((elem) => {
				let rnd       = Math.floor(Math.random() * (10 - 0 + 1) + 0);
				elem.quantity = rnd;
				elem.price    = 19.99;
				return elem;
			});
			console.log(JSON.stringify(arr));
		});
	}
	
	render() {
		return (
			<div className="App">
				{router}
			</div>
		);
	}
}

export default App;
