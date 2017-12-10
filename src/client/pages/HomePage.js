import React, { Fragment } from 'react';

const onClick = () => console.log('Hi there');

const HomePage = () => (
  <Fragment>
    <div>{'I\'m the home component'}</div>
    <button onClick={onClick}>Press me!</button>
  </Fragment>
);

export default {
  component: HomePage,
};
