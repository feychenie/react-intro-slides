import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Destructuring assignement: Object</p>
    <CodePane
      lang="javascript"
      textSize="0.7em"
      source={`
      const person = {
        name: 'Fred',
        job: 'dev',
        birth: {
          day: 15,
          month: 3,
          year: 1982
        },
        toHire: false
      };

      const { name, birth: {year}, toHire: available, ...rest } = person;

      console.log(name);
      console.log(birth);
      console.log(year);
      console.log(toHire);
      console.log(available);
      console.log(rest)
      `}
    />
  </Slide>
);
