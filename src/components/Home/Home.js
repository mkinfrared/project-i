import React, {Component} from 'react';
import Slider from '../Slider/Slider';
import ShelfDisplay from '../ShelfDisplay/ShelfDisplay';
import CharacterDisplay from '../CharactersDisplay/CharactersDisplay';
import MovieSection from '../MovieSection/MovieSection';

export default class Home extends Component{
    render() {
        return(
        	<div>
		        <Slider/>
		        <ShelfDisplay/>
		        <CharacterDisplay/>
		        <MovieSection/>
	        </div>
        )
    }
}