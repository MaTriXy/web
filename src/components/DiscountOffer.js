import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  margin-top: 3rem;
  height: 30rem;
  background-image: url('/images/home/parallax-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: 768px) {
    background-image: none;
    background-color: #a3cbda;
  }

  .column {
    margin-left: 7rem;
    @media only screen and (max-width: 768px) {
      margin-left: 0rem;
    }
  }

  h1 {
    margin-top: 5rem;
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .is-size-3 {
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0.5rem;
    }
  }
`;

const DiscountOffer = () => (
  <Container className="columns">
    <div className="column is-5 has-text-centered">
      <h1 className="has-text-weight-bold has-text-black">Up To 50% Off</h1>
      <p className="is-size-3 has-text-weight-bold has-text-black">
        Winter Sale
      </p>
      <p className="has-text-black">Him she'd let them sixth saw light</p>
      <Button text="Shop Now" />
    </div>
  </Container>
);

export default DiscountOffer;