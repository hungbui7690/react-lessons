import './App.css'
import Counters from './components/counters'
import Navbar from './components/navbar'

function App() {
  // (3) now, we want to display the number of counters which has value > 0 in the navbar > right now we have 4 counters, and 3 of them are greater 0
  // check the picture, we see that Navbar and Counter[s] are children of App > both of them do not have relationship > in this case, we need to lift the state up from Counter[s] to App, so that we can pass the states to all children
  return (
    <>
      <Navbar />
      <main className='container'>
        <Counters />
      </main>
    </>
  )
}

export default App
