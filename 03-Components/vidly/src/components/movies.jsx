import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
  // (1)
  state = {
    movies: getMovies(),
  }

  // (2)
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((m) => {
            return (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Movies
