import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      input:'',
    }
  }
  sayIt=(string)=>{
    this.setState({input:string})
  }

  render() {
    return (
      <Message title='this is my title'
       text = 'hello world'
       action ={this.sayIt}
       input={this.state.input}
       />

    );
  }
}

export default App;
