let comicsInStore = require('../Comics/comics');

module.exports = {
	getLocalComics : (req, res) => res.status(200).send(comicsInStore),
	getComicBook: (req, res) => {
		let {id} = req.params;
		id       = parseInt(id);
		let arr  = comicsInStore.filter((elem) => elem.id === id);
		res.status(200).send(arr);
	},
	updateComicBook: (req, res) => {
		let {id}  = req.params;
		id        = parseInt(id);
		let index = comicsInStore.findIndex((elem) => {
			return elem.id === id;
		});
		if (comicsInStore[index].quantity > 0) {comicsInStore[index].quantity--;}
		res.status(200).send(comicsInStore);
	},
	createComicBook: (req, res) => {
		let {id, title, description, quantity, thumbnail} = req.body;
		let extension                                     = thumbnail.substring(thumbnail.length - 3, thumbnail.length);
		let path                                          = thumbnail.substring(0, thumbnail.length - 4);
		id                                                = parseInt(id);
		console.log(path, '-----', extension);
		let newComicBook                                  = {
			id         : id,
			title      : title,
			description: description,
			quantity   : quantity,
			thumbnail  : {
				path     : path,
				extension: extension
			}
		};
		if (!comicsInStore.some((elem) => elem.id === id)) {
			comicsInStore.unshift(newComicBook);
		}
		res.status(200).send(comicsInStore);
	},
	deleteComicBook: (req, res) => {
		let {id}  = req.params;
		id        = parseInt(id);
		let index = comicsInStore.findIndex((elem) => elem.id === id);
		if (index >= 0) {
			comicsInStore.splice(index, 1);
		}
		res.status(200).send(comicsInStore);
	}
};