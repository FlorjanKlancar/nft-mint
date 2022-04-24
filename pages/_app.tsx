import '../styles/globals.css'
import AuthComponent from '../components/AuthComponent'
import { UserProvider, useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  const { user } = useUser()

  return (
    <div className="" data-theme="">
      <div className="primary-content h-screen">
        {!user ? <AuthComponent /> : <Component {...pageProps} />}
      </div>
    </div>
  )
}

function MyAppWithProvider({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ToastContainer />
      <MyApp Component={Component} pageProps={pageProps} />
    </UserProvider>
  )
}

export default MyAppWithProvider
