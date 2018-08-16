import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Comic from './Comic/Comic';
import Home from './Home/Home';

export default (
	<Switch>
		<Route exact path="/stock/comics/:id" component={Comic}/>
		<Route exact path="/" component={Home}/>
	</Switch>
)