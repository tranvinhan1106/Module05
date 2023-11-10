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
    this.setState({
      list: [...this.state.list, this.state.item],
      item: "",
    });
  }

  render() {
    return (
      <div class="centered-div"> 
        <thead>
          <h1 style={{textAlign:'center'}}>Todo List</h1>
          <input type='text' onChange={(evet) => this.handleChange(evet.target.value)}></input><button type='submit' onClick={()=>this.handleAddItem()}>Add</button>
        </thead>
        <br/>
        <table className='table'>
          <tbody>
            {
              this.state.list.map((value) => {
                return (
                  <tr>
                    <td>{value}</td>
                  </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
