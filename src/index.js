import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from './components/content';
import { Header } from './components/header';
import './index.css';


ReactDOM.render(
  <>
    <Header />
    <Content />
  </>
  , document.getElementById('root')
);


