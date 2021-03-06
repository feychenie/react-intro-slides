import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Destructuring assignement: Array</p>
    <CodePane
      lang="javascript"
      source={`      const arr = [1,2,3,4,5,6];
      const [a, b, ...stuff] = arr;

      console.log(a); // 1
      console.log(b); // 2
      console.log(stuff); // [3,4,5,6]`}
    />
    <p>Destructuring function arguments</p>
    <CodePane
      lang="javascript"
      source={`      const add = (a, b, ...rest) => {
        const result = a + b;
        if (rest.length > 0) return add(result, ...rest); // spread
        return result;
      }`}
    />
  </Slide>
);
