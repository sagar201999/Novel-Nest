import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <>
      <div className='text-center bg-navy'>
        <h1>404</h1>
        <h1>page not found</h1>
        <Link to='/home' className='button1'>Go Home</Link>
      </div>

    </>
  )
}

export default error