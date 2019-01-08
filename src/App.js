import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from './component/CardList';

import './App.css';
// import { constants } from 'perf_hooks';

let cards = [
  {
    title: "Super card",
    subtitle: "kolsgt",
    url: "https://loremflickr.com/320/240/dog",
    id: 1
  },
  {
    title: "Other card",
    subtitle: "Ipsum chdek",
    url: "https://loremflickr.com/g/320/240/paris",
    id: 2
  },
  {
    title: "Last card",
    subtitle: "theerest",
    url: "https://loremflickr.com/g/320/240/girl",
    id: 3
  }
];



class App extends Component {
  render() {
    return (
      <div >
        <h3 className="heading">Editor Picks</h3>
        <div className="cards-container">

          <CardList cards={cards}/>
      </div>
      </div>
    );
  }
}

export default App;
