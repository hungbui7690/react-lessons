import { Component } from 'react'
import './App.css'
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  }

  constructor(props) {
    super(props)
    console.log('App - constructor ', this.props)
  }

  componentDidMount() {
    console.log('App - Mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value++

    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)

    this.setState({ counters })
  }

  render() {
    console.log('App - render')

    const total = this.state.counters.filter((c) => c.value > 0).length
    return (
      <>
        <Navbar totalCounters={total} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    )
  }
}

export default App
