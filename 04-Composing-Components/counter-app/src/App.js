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

  // (1) call only once when the component is created > this is a good opportunity for us to initialize the state that we get from the props
  constructor(props) {
    super(props)
    console.log('App - constructor ', this.props) // undefined, since we did not pass it as parameter of the function

    // this.state = this.props.something // just an example > if we want to access props, we need to pass it as parameter in constructor() and super()
    // this.setState() // error > this just can be called when the component is rendered
  }

  // (2) this one is called after the component is rendered > this is the best place to make an AJAX call to get data from server
  componentDidMount() {
    // AJAX call
    // this.setState(data)

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

  // (3) when App is rendered, all of its children will be rendered recursively
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
