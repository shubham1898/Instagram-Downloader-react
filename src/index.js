import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Navbar from './navbar';
import SearchBar from './Components/SearchBar';
import Contact from './Components/Contact';


  ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
  )
  ReactDOM.render(
  
    <Navbar />,
  
  document.getElementById('root-nav')
  )
  ReactDOM.render(
  
    <SearchBar />,
  
  document.getElementById('root-search')
  )
  ReactDOM.render(
  
    <Contact />,
  
  document.getElementById('root-contact')
  )





