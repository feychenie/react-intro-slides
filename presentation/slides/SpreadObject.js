import React from 'react';
import styled from 'styled-components';
import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

const Column = styled('div')`
  display: inline-block;
  width: calc(50% - 24px);
  margin: 0 12px;
`;
export default () => (
  <Slide>
    <p>Object spreading</p>
    <Column>
      <CodePane
        lang="javascript"
        textSize="0.7em"
        source={`// inital objects

        const fred = {
          name: 'Fred',
          age: 36
        };
        const dev = {
          job: 'dev'
        }

// merge objects
        const fredDev = {
          ...fred,
          ...dev
        }`}
      />
    </Column>
    <Column>
      <CodePane
        lang="javascript"
        textSize="0.7em"
        source={`// clone an object
        const otherFred = {
          ...fredDev
        }

// clone and overwrite
        const fredSales = {
          ...fredDev,
          job: 'sales'
        }`}
      />
    </Column>
  </Slide>
);
