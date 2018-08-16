const express     = require('express');
const bodyParser  = require('body-parser');
const externalApi = require('./controllers/ExternalAPI/externalApi');
const cc          = require('./controllers/CRUDcontrolller/crudController');

const app       = express();
const serverURL = '/stock/comics';
const port      = 3005;

app.use(bodyParser.json());
app.listen(port, console.log(`Listening on port ${port}`));


app.get(`${serverURL}`, cc.getLocalComics);
app.get(`/marvel/`, externalApi.getMarvelChar);
app.post(`/marvel/URI/`, externalApi.getmarvelURI);
app.get(`${serverURL}/:id`, cc.getComicBook);
app.post(`${serverURL}`, cc.createComicBook);
app.put(`${serverURL}/:id`, cc.updateComicBook);
app.delete(`${serverURL}/:id`, cc.deleteComicBook);
