import React from 'react'
import { useSelector } from 'react-redux';

export default function Header({filter}) {

  const numberOfLikedMovie = useSelector(state => state.movieReducer)

  return (
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a href="facebook.com" className="navbar-brand">Glow</a>
    <span>{numberOfLikedMovie}</span>
    <span className="d-flex" role="search">
      <input className="form-control me-2" onChange={(e)=>filter(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
    </span>

  </div>
</nav>
  )
}
