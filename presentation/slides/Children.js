import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>Children prop</p>
    <p>
      <CodePane
        source={`
        <Post title="Intro">This is a the intro post</Post>
        `}
      />
    </p>
    <p>
      <CodePane
        source={`
        const Post = (props) => {
          const { title, children } = props;
          return (<div>
            <h2>{title}<h2>
            <div>{children}</div>
          </div>)
        }
        `}
      />
    </p>
  </Slide>
);

// className
// lifeCycle
//
