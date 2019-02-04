import React from 'react';

import { Slide, Heading, List, ListItem, Code } from 'spectacle';

export default () => (
  <Slide>
    <Heading size={4}>Ok, but before:</Heading>
    <List>
      <ListItem>
        <Code>export</Code> and <Code>import</Code>
      </ListItem>
      <ListItem>destructuring assignement</ListItem>
      <ListItem>spread operator</ListItem>
      <ListItem>immutability</ListItem>
    </List>
  </Slide>
);
