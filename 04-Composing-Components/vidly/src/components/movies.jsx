import React, { Component, useState } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'

class Movies extends Component {
  state = {
    movies: getMovies(),
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }

  // (2) go to like.jsx
  handleLike = () => {
    console.log('Like Clicked')
  }

  render() {
    const { length: count } = this.state.movies
    if (count === 0) return <p>There are no movies in the database!</p>

    return (
      <>
        <p>There are {count} movies in the database</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
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

                  <td>
                    {/* (1) click event */}
                    <Like onClick={this.handleLike} liked={m.liked} />
                  </td>

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
      </>
    )
  }
}

export default Movies
