import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { BarChart } from '../components/BarChart';

const stories = storiesOf('App Test', module);

stories.add('App', () => {



    let fdata = 0;

  return (
    <div>
      <BarChart />
    </div>
  );
});
