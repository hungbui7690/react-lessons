import React, { Component, useState } from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
  state = {
    movies: getMovies(),
  }

  // (3)
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>

            {/* (1) add an empty column in header */}
            <th></th>
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

                {/* (2) create delete button + add event */}
                <th>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Movies
