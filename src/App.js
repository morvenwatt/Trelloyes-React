import React from 'react';
import List from '.src/List.js';
import './src/App.css';
import STORE from '.src/STORE.js'


class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }
  render (){
    const { store } = this.props
    return (
      <body>
      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
        {store.lists.map(list => (
          <List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))}
        </div>
      </main>
      </body>
    )
  }
}

export default App;
