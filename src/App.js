import React, {Component} from 'react';
import Card from './components/card/Card';
import List from './components/list/List';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      cards: {}
    }
  }

  render(){
    const {store} = this.props;
    console.log(store);
    return (
      <main className="App">
        {/* We will need to render 4 <List /> elements here */}
      </main>
    )
  }
}

export default App;