import React from 'react';

import { Slide, Image } from 'spectacle';

import image from '../../assets/render-loop.png';

export default () => (
  <Slide>
    <p>Render loop</p>
    <Image src={image} />
  </Slide>
);
