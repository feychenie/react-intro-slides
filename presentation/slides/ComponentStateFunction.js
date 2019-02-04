import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>setState with existing state</p>
    <CodePane
      textSize="0.7em"
      source={`      import React, { Component } from 'react';

      const increment = (state, props) => ({ count: state.count + props.step })

      class Counter extends Component {
        state = {
          count: 0
        }
        handleIncrement = () => {
          this.setState( increment )
        }
        render = () => {
          const { count } = this.state;
          const { children, title} = this.props;
          return (
            <div>
              <p>Count: {count}</p>
              <p><button onClick={this.handleIncrement}> + </button></p>
            </div>
          )
        }
      }`}
    />
  </Slide>
);
