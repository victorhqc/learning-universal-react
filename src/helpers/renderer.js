import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default ({ req, store, context }) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString((
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <Fragment>{renderRoutes(Routes)}</Fragment>
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  ));
  const styleTags = sheet.getStyleTags();

  const helmet = Helmet.renderStatic();

  const initialState = serialize(store.getState());

  return `<html>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
    ${styleTags}
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.INITIAL_STATE = ${initialState}
    </script>
    <script src="bundle.js"></script>
  </body>
</html>`;
};
