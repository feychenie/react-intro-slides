import React from 'react';
import styled from 'styled-components';
import { Slide, Text, Layout, Fit, Image } from 'spectacle';

const CompanyName = styled('span')`
  display: inline-block;
  margin: 12px 24px;
`;

const Companies = styled('div')`
  margin: 24px 0;
`;

const companies = [
  'facebook',
  'whatsapp',
  'instagram',
  'twitter',
  'airbnb',
  'netflix',
  'uber',
  'deezer',
  'spotify',
  'ebay',
  'paypal',
  'pinterest',
  'twitch',
  'discord',
  'wix',
  'webflow',
  'vimeo',
  'dailymotion',
  'dropbox',
  'salesforce',
  'stripe',
  'amex',
  'lyft',
  'venmo',
  'arte',
  'asana',
  'atlassian',
  'invision',
  'figma',
  'imdb',
  'intercom',
  'mapbox',
  'postman',
  'reddit',
  'tesla',
  'wordpress'
];
export default () => (
  <Slide>
    <Text>Who uses (and contributes) ?</Text>
    <Companies>
      {companies.map(c => (
        <CompanyName key={c}>{c}</CompanyName>
      ))}
    </Companies>
    <Text>
      And <strong>many</strong> more...
    </Text>
  </Slide>
);
