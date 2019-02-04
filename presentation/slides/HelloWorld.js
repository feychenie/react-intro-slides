import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Component as a function</p>
    <CodePane
      textSize="0.7em"
      source={`// components/Hello.js
      import React from 'react';

      const Hello = (props) => {
        const { name } = props
        return <h1>Hello {name}</h1>
      }

      export default Hello;`}
    />
    <p />
    <CodePane
      textSize="0.7em"
      source={`// in App.js
      import React from 'react';
      import Hello from './components/Hello';

      const App = () => (
        <div>
          <Hello name="Fred" />
        </div>
      )`}
    />
  </Slide>
);
