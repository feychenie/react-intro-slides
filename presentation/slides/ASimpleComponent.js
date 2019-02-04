import React from 'react';
import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

const code = require('raw-loader!../code/simple.example');

export default () => (
  <Slide>
    <p>hello JSX :)</p>
    <CodePane textSize="0.8em" source={code} />
  </Slide>
);
