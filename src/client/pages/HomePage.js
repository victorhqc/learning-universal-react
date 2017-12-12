import React from 'react';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`;

const HomePage = () => (
  <HomePageWrapper>
    <h1>Welcome</h1>
    <p>Check out these awesome features</p>
  </HomePageWrapper>
);

export default {
  component: HomePage,
};
