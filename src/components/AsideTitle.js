import React from 'react';
import styled from 'styled-components';

import config from '../config';

const Container = styled.aside`
  background-color: #f1f6f7;
  width: 100%;
  @media only screen and (max-width: 768px) {
    background-color: #f1f6f7;
    width: 100%;
  }
`;

const Title = styled.p`
  background-color: ${config.themeColor};
  width: 100%;
  height: 4.5rem;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 1rem;
  margin-bottom: -4px;
`;

const AsideTitle = ({ title }) => (
  <Container className="menu">
    <Title className="menu-label has-text-white is-capitalized">{title}</Title>
  </Container>
);

export default AsideTitle;