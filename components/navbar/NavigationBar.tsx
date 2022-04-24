import React from 'react'
import Menu from './Menu'

function NavigationBar() {
  return (
    <header>
      <div className="fixed z-50 hidden h-screen w-64 border-r-2  border-secondary/10 bg-gradient-to-b from-base-300 to-base-200 xl:block">
        <Menu />
      </div>
    </header>
  )
}

export default NavigationBar
