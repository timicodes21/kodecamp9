import React, { Component } from 'react'
import Counters from './components/counters';
import Navigbar from './components/navigbar'

export class Application
 extends Component {
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 4},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  }

  handleDelete = (id) => {
      console.log(id)
      const counters = this.state.counters.filter(counter => counter.id !== id);
      this.setState({ counters })
  }

  handleIncreament = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value ++;
      this.setState({ counters })
  }

  handleDecreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value --;
    this.setState({ counters })
}

  handleReset = () => {
      const counters = this.state.counters.map(counter => {
          counter.value = 0;
          return counter;
      });
      this.setState({ counters })
  }

  render() {
    return (
      <div className='p-5'>
        <Navigbar counts={this.state.counters.filter(counter => counter.value > 0).length} />
        <Counters onReset={this.handleReset} counters={this.state.counters} onIncreament={this.handleIncreament} onDecreament={this.handleDecreament} onDelete={this.handleDelete} />
      </div>
    )
  }
}

export default Application



