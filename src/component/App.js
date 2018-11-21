import React, { Component } from 'react';
import FirstComponet from './FirstComponent'
import Counter from './Counter'



class App extends Component {
  render() {
    return (
      <div class='col col-sm-12'>
        <div class='col col-sm-6'>
          <FirstComponet name='Md. Abu Said Sarkar' />
          <br></br>
        </div>
        <div class='col col-sm-6'>
          <Counter />
        </div>

      </div>

    )
  }
}

export default App;
