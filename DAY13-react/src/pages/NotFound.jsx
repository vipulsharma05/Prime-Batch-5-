import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found Page</h2>
        <a href="/">Home</a>
        <br />
        <Link to="/">Home Link</Link>
    </div>
  )
}

export default NotFound
