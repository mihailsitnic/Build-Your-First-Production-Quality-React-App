import React from 'react'
import {Link} from '../router/Link'

export const Footer = () => {
  return(
    <footer className="Footer">
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/complete">Complete</Link>
    </footer>
  )
}
