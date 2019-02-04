import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Immutability: arrays</p>
    <CodePane
      source={`
        const a = [1, 2];
        const b = [1, 2];
        const c = a;
        const d = [...a]
        console.log(a === b);
        console.log(a === c);
        console.log(a === d);

        c.push(3);
        console.log(a === c);
      `}
    />
  </Slide>
);
