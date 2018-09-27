/**import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list=[
{
  title:'React',
  url:'https://facebook.github.io/ract/',
  author:"Jordan Walke",
  num_comments:3,
  points:4,
  objectID:0
},
{
  title:'Redux',
  url:'https://github.com/reactjs/redux',
  author:"Dan Abramov",
  num_comments:2,
  points:5,
  objectID:1
}
];

 * ES5
 * {list.map(function(d,i){
      return(
          <div key={d.objectID}>
              <span><a href={d.url}>{d.title}</a></span>
              <span>{d.author}</span>
              <span>{d.num_comments}</span>
              <span>{d.points}</span>
          </div>
        )
    })}

 * ES6
 * {
 *   list.map(d=>{
 *     return(
 *       <div key={d.objectID}>
              <span><a href={d.url}>{d.title}</a></span>
              <span>{d.author}</span>
              <span>{d.num_comments}</span>
              <span>{d.points}</span>
          </div>
 *     )
 *   })
 * }
 * //简洁函数体  替换  块状函数体
 * {list.map(d=>
      <div key={d.objectID}>
        <span><a href={d.url}>{d.title}</a></span>&nbsp;
        <span>{d.author}</span>&nbsp;
        <span>{d.num_comments}</span>&nbsp;
        <span>{d.points}</span>
    </div>
  )}



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:list
    }
  }
  render() {
    const {list}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React !! </h1>
        </header>
        {list.map(d=>
            <div key={d.objectID}>
              <span><a href={d.url}>{d.title}</a></span>&nbsp;
              <span>{d.author}</span>&nbsp;
              <span>{d.num_comments}</span>&nbsp;
              <span>{d.points}</span>

          </div>
        )}
      </div>
    );
  }
}

export default App; */

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ItemPanel from './ItemPanel.js';
import {Button} from 'reactstrap';
import Store from './Store.js';
//import fetch from 'isomorphic-fetch';
//import PropTypes from 'prop-types';
import  classnames from 'classnames';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      store:new Store
    }
  }
  removeItem=(key)=>{
    this.setState({
      store:this.state.store.removeItem(key)
    })
  }
  render(){
    //debugger;
    const classa=classnames('class1','class2');
    return(
      <div className={classa}>
          <Button color="primary">primary</Button>
          <ItemPanel items={this.state.store.store} removeItem={this.removeItem}/>
      </div>
    )
  }
}

export default App;