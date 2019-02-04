// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import CoverSlide from './slides/CoverSlide';
import WhatIsReact from './slides/WhatIsReact';
import WhoUses from './slides/WhoUses';
import ShowMeCode from './slides/ShowMeCode';
import Before from './slides/Before';
import ExportImport from './slides/ExportImport';
import DestructuringArray from './slides/DestructuringArray';
import DestructuringObject from './slides/DestructuringObject';
import SpreadArray from './slides/SpreadArray';
import SpreadObject from './slides/SpreadObject';
import ImmutabilityTypes from './slides/ImmutabiltyTypes';
import ImmutabilityArrays from './slides/ImmutabilityArrays';
import ImmutabilityObjects from './slides/ImmutabilityObjects';
import PureFunctions from './slides/PureFunctions';
import InstallPlayground from './slides/InstallPlayground';
import Jsx from './slides/Jsx';
import HelloWorld from './slides/HelloWorld';
import ASimpleComponent from './slides/ASimpleComponent';
import Children from './slides/Children';
import PropTypes from './slides/PropTypes';
import ComponentState from './slides/ComponentState';
import ComponentStateFunction from './slides/ComponentStateFunction';
import RenderLoop from './slides/RenderLoop';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');
require('prismjs/themes/prism-tomorrow.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <CoverSlide />
        <WhatIsReact />
        <WhoUses />
        <ShowMeCode />
        <Before />
        <ExportImport />
        <DestructuringObject />
        <DestructuringArray />
        <SpreadArray />
        <SpreadObject />
        <ImmutabilityArrays />
        <ImmutabilityObjects />
        <InstallPlayground />
        <HelloWorld />
        <ASimpleComponent />
        <PropTypes />
        <Children />
        <ComponentState />
        <ComponentStateFunction />
        <RenderLoop />
      </Deck>
    );
  }
}
