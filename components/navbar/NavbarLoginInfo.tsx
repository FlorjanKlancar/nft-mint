import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Link from 'next/link'
import React from 'react'
import ThemeChange from './ThemeChange'

function NavbarLoginInfo() {
  const { user } = useUser()

  const logoutHandler = async () => {
    await supabaseClient.auth.signOut()
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="hidden xl:block">
        <Link href={'/'} passHref>
          <div className="btn btn-ghost text-xl normal-case">
            <span className="text-accent">NFT Mint</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col  items-center space-x-3 space-y-3 p-5 xl:flex-row  xl:space-y-0 xl:p-0">
        <div className="hidden xl:flex">
          <ThemeChange />
        </div>

        <p className="text-center text-base text-gray-400">
          Logged in as{' '}
          <span className="font-semibold text-secondary dark:text-white">{user?.email}</span>
        </p>
        <div className="rounded-full bg-gradient-to-br from-primary-focus via-primary/50 to-secondary p-0.5 transition-all duration-300 hover:scale-105">
          <button
            className="rounded-full bg-base-300 px-6 py-2 text-secondary "
            onClick={logoutHandler}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavbarLoginInfo
