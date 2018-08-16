import React, {Component} from 'react';
import axios from 'axios';
import './CharactersDisplay.css'
import LoadingScreen from '../LoadingScreen/LoadingScreen';


export default class CharacterDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		}
	}
	
	componentWillMount() {
		axios.get('/marvel/').then((resp) => {
			console.log(resp.data);
			let respLength = resp.data.results.length - 1;
			let arr        = [];
			for (let i = 0; i < 20; i++) {
				respLength = resp.data.results.length - 1;
				let rnd    = Math.floor(Math.random() * (respLength - 0 + 1) + 0);
				arr.push(resp.data.results[rnd]);
				resp.data.results.splice(rnd, 1);
			}
			console.log(arr);
			let charOnDisplay = arr.map((elem) => {
				return (
					<div key={elem.name + elem.id} className="char-card">
						<div className="char-img">
							<img src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} alt={`${elem.name}`}/>
							<h3>{elem.name}</h3>
						</div>
					</div>
				);
			});
			this.setState({characters: charOnDisplay});
		});
	}
	
	render() {
		let {characters} = this.state;
		return (
			<div className="character-display">
				<h1>Some cool superheroes from our partner</h1>
				<div className="character-display__section">
					{(characters.length) ? characters : <LoadingScreen/>}
				</div>
			</div>
		);
	}
}