// (***) we don't need href since we use onClick to handle
const Pagination = () => {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className='page-link'>1</a>
        </li>
        <li className='page-item'>
          <a className='page-link'>2</a>
        </li>
        <li className='page-item'>
          <a className='page-link'>3</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
