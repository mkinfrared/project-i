const md5   = require('../md5Generator/md5');
const axios = require('axios');

const hashGen = (ts) => md5(ts + priKey + pubKey);

module.exports = {
	getMarvelChar: function (req, res) {
		let ts = new Date().toISOString();
		console.log(ts);
		let hash = hashGen(ts);
		console.log(hash);
		axios.get(`http://gateway.marvel.com//v1/public/characters?events=238&limit=100&ts=${ts}&apikey=${pubKey}&hash=${hash}`).then((response) => res.status(200).send(response.data.data));
	},
	getmarvelURI: (req, res) => {
		console.log(req.body);
		let {link} = req.body;
		console.log(link);
		let ts   = new Date().toISOString();
		let hash = hashGen(ts);
		console.log(hash);
		console.log(`${link}?ts=${ts}&apikey=${pubKey}&hash=${hash}`);
		axios.get(`${link}?ts=${ts}&apikey=${pubKey}&hash=${hash}`).then((resp) => {
			console.log('ASDFGHJ');
			console.log(resp.data);
			// res.status(200).send(resp.data);
		}).catch(console.log);
	}
};