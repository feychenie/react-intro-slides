import React from 'react';

import { Slide, Code, Text, Heading } from 'spectacle';

export default () => (
  <Slide>
    <Heading size={5}>
      Create a project to test examples that will follow:
    </Heading>
    <p>
      <Code>npm -v</Code> > 5.2.0 ?
    </p>
    <p>
      <Code>npx create-react-app react-episode-1</Code>
    </p>
    <p>
      <Code>cd react-episode-1</Code>
    </p>
    <p>
      <Code>npm start</Code>
    </p>
  </Slide>
);
