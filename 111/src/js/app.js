import React,{Component} from 'react';
import '../css/index.css';
class App extends Comment{
  render(){
    const helloWorld='Welcome to the Road to learn React';
    return(
      <div className='App'>
        <h2>{helloWorld}</h2>
      </div>
    )
  }
}
export default App;