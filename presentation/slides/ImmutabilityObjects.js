import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Immutability: objects</p>
    <CodePane
      source={`
        const a = {o: 1, p: 2};
        const b = {o: 1, p: 2};
        const c = a;
        const d = {...a}
        console.log(a === b);
        console.log(a === c);
        console.log(a === d);

        c.q = 3;
        console.log(a === c);
      `}
    />
  </Slide>
);
