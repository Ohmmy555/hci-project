import Sideber from './Sideber'
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function Layout({ children }:{children:any}) {
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