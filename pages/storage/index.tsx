import React from 'react'
import Layout from '../../components/layout/Layout'
import StorageGrid from '../../components/storage/StorageGrid'
import axios from 'axios'
import { supabaseServerClient } from '../../utils/server/supabaseServer'

function Storage() {
  const pageTitle = (
    <h1>
      Your <span className="text-secondary underline underline-offset-2">Storage</span>
    </h1>
  )
  return (
    <Layout pageTitle={pageTitle}>
      <div className="px-12">
        <p>Here you can see all of the files that you uploaded to IPFS</p>
        <StorageGrid />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabaseServerClient.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  const result = await axios.get('http://localhost:3000/api/ipfs', { params: { userId: user.id } })
  console.log('resultz', result.data)
  // Pass data to the page via props
  return { props: { msr: 'hi' } }
}

export default Storage
