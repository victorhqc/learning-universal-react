import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './store/createStore.server';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => route.loadData && route.loadData(store));

  Promise.all(promises).then(() => {
    res.send(renderer({ req, store }));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
