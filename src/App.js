import React, { Component} from 'react';
import Counter from './components/counter/Counter'

class App extends Component {

render(){

  return(
    <div>
    <h1 className = 'colored'>Counter Example</h1>
      <Counter name = 'red'/>
      <Counter name = 'blue'/>
      <Counter name = 'green'/>
      <Counter name = 'purple'/>
      <Counter name = 'black'/>
    </div>
    )
  }
}

export default App;
