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
        <header className="App-header">
          <h1>TrellOhNo!</h1>
        </header>
        <section className="App-list">
          {store.lists.map((list) => (
            <List
              title={list.header}
              cards={list.cardIds}
              id={"list-" + list.id}
            />
          ))}
        </section>
        
      </main>
    )
  }
}

export default App;