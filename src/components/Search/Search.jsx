import React from 'react'
import './search.css'


const Search = ( {setSearchTerm} ) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <form action="#" className='search-form'>
        <input type="search" placeholder='Search by name...' className='search-bar' onChange={handleSearch} />
      </form>    
    </div>
  )
}

export default Search