import React from 'react';
import gif from './gif.gif';
import styled from 'styled-components';

const StyledGif = styled.img`
    width: 100%;
    max-width: 600px;
    min-width: 150px;
`;

const Gif = () => {
  return <StyledGif src={gif} alt="GIF animado" />;
};

export default Gif;