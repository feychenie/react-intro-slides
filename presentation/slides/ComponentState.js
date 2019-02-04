import React from 'react';

import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>State, setState (and component as a class)</p>
    <CodePane
      textSize="0.7em"
      source={`    class Accordion extends React.Component {
        state = {
          open: false
        }
        handleOpen = () => {
          this.setState({ open: true})
        }
        handleClose = () => {
          this.setState({ open: false})
        }
        render = () => {
          const { open } = this.state;
          return (
            <div>
              <button onClick={this.handleOpen}>Open</button>
              {open && (<div>
                <p>Some Text</p>
                <button onClick={this.handleClose}>Close</button>
              </div>)}
            </div>
          )
        }
      }`}
    />
  </Slide>
);
