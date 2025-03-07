import React from 'react';
import gif from './gif.gif';
import styled from 'styled-components';

const StyledGif = styled.img`
    width: 100%;
    max-width: 600px;
    min-width: 150px;

  @media (max-width: 400px) {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1550px) {
    max-width: 350px;
  }
`;

const Gif = () => {
  return <StyledGif src={gif} alt="GIF animado" />;
};

export default Gif;