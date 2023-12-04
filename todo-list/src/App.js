import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    }
  }
  handleChange = (event) => {
    this.setState({
      item: event
    })
  }
  handleAddItem = () => {
    const newList = this.state.list;
    newList.push(this.state.item);
    this.setState({
      list: newList,
      item: "",
    });
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Todo List</h2>
        <input type='text' onChange={(event) => this.handleChange(event.target.value)} />
        <button type='button' onClick={this.handleAddItem}>Add</button>
        <div>
          {this.state.list.map((value, index) => {
            return (
              <>
                <span key={index}></span>
                <p>{value}</p>
              </>
            )
          })}
        </div>
      </div>
    )
  }
}
export default App;