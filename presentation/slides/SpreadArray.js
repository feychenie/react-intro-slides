import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Array spreading</p>
    <CodePane
      lang="javascript"
      source={`
        import { add } from './mylib';
        const arr1 = [1, 2, 3];
        // cloning an array
        const clone = [...arr1];
        // including an array into another
        const arr2 = [0, ...arr1, 4];
        // concat two arrays into a new one
        const arr3 = [...arr1, ...arr2];
        // spreading an array as function arguments
        const result = add(...arr1);
      `}
    />
  </Slide>
);
