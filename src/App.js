import React from 'react'
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';



library.add(faTrash);



class App extends React.Component {
  //const [state, setState] = useState();

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }

    }
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()

      }
    })
  }
  addItems(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if (newItem.text !== "") {
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
      this.setState({
        items:filteredItems
        
      })





  }
  render() {
    return (
      <div className='App'>
        <header>
          <form id="to-do-form" onSubmit={this.addItems} >
            <input type="text" placeholder='Add an Items'
              value={this.setState.currentItem?.text}
              onChange={this.handleInput} />
            <button type='submit'>+</button>

          </form>
        </header>
        <ListItems items={this.state.items}
          deleteItem={this.deleteItem}


        ></ListItems>

      </div>
    );
  }
}

export default App;
