import '../styles/globals.css'
import AuthComponent from '../components/AuthComponent'
import { UserProvider, useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Scrollbars } from 'react-custom-scrollbars'

function MyApp({ Component, pageProps }) {
  const { user } = useUser()

  return (
    <Scrollbars style={{ height: '100vh' }} universal>
      <div data-theme="">
        <div className="primary-content h-screen">
          {!user ? <AuthComponent /> : <Component {...pageProps} />}
        </div>
      </div>
    </Scrollbars>
  )
}

function MyAppWithProvider({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <MyApp Component={Component} pageProps={pageProps} />
    </UserProvider>
  )
}

export default MyAppWithProvider
