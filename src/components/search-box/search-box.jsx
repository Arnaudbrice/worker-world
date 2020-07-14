import React from 'react'
import "./search-box.css"
//props={placeholder:"",handleChange:""}
const Search = ({placeholder,handleChange}) => {
  return (
    <div className="search">
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
    </div>
  )
}

export default Search;