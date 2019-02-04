import React from 'react';

import { Slide, Code } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>
      <Code>export</Code> and <Code>import</Code>
    </p>
    <CodePane
      textSize="0.8em"
      source={`// named export
      export const divide = (a, b) => a / b;

      // object as named exports
      const add = (a, b) => a + b;
      const sub = (a, b) => a - b;
      export {
        add,
        sub
      }

// default export
      export default (stuff) => \`Hello \${stuff}\`;

//----- other file -----
      import MyStuff, { divide, add, sub as s } from './mylib';
      `}
    />
  </Slide>
);
