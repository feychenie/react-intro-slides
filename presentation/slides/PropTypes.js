import React from 'react';
import { Slide } from 'spectacle';
import CodePane from '../components/CodePane';

export default () => (
  <Slide>
    <p>PropTypes and defaultProps</p>
    <CodePane
      source={`
      import React from 'react';
      import PropTypes from 'prop-types';

      const HelloComponent = ({ name }) => <h1> Hello {name}</h1>;

      HelloComponent.propTypes = {
        name: PropTypes.string
      }

      HelloComponent.defaultProps = {
        name: 'stranger'
      }
      `}
    />
  </Slide>
);
