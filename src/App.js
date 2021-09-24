import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import routes, { SwitchRouter } from './routes';
import { data } from './modules/ItemInfoPage/data';

const App = () => {

  useEffect(() => {

    const fees = localStorage.getItem('fees')

    if (!fees) {
      localStorage.setItem('fees', JSON.stringify(data))
    }

  }, [])


  return (
    <>
      <SwitchRouter routes={routes} />
      <CssBaseline />
    </>
  );
};

export default App;

