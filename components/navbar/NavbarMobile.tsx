import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import NavbarLoginInfo from './NavbarLoginInfo'
import { UserIcon } from '@heroicons/react/outline'
import ThemeChange from './ThemeChange'

function NavbarMobile() {
  return (
    <div className="supports-backdrop-blur:bg-white/9 bg-primary-300 navbar sticky top-0 z-50 border-b-2 border-secondary/10 text-gray-600 backdrop-blur transition-colors duration-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="bg-primary-300 dropdown-content menu rounded-box menu-compact mt-3 w-52 border-2 border-secondary/10 bg-base-100 p-2 shadow"
          >
            <Menu />
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={'/'} passHref>
          <div className="btn btn-ghost text-xl normal-case text-accent">NFT Mint</div>
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeChange />

        <div className="dropdown dropdown-end">
          <label tabIndex={1} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <UserIcon className="h-5 w-5" />
              <span className="badge indicator-item badge-xs badge-primary" />
            </div>
          </label>
          <ul
            tabIndex={1}
            className="bg-primary-300 dropdown-content menu rounded-box menu-compact mt-3 border-2 border-secondary/10 bg-base-100 p-2 shadow"
          >
            <NavbarLoginInfo />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
