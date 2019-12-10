import React from 'react'
import Navbar from '../Navbar/navbar'

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
