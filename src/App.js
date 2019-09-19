import React, { Component} from 'react';
import Counter from './components/counter/Counter'

class App extends Component {

render(){

  return(
    <div>
    <h1 className = 'colored'>Counter Example</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
    )
  }
}

export default App;
