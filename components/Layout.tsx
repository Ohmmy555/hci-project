import React, { Children } from 'react'
import Sideber from './Sideber'

function Layout({ children }) {
  return (

    <div className='h-screen flex flex-row justify-start'>
      <title>{children}</title>
        <Sideber/>
        <div className='bg-primary flex-1 p-4 text-white'>
{children}
        </div>
    </div>
  )
}

export default Layout