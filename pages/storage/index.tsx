import React from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { supabaseServerClient } from '../../utils/server/supabaseServer'
import { server } from '../../config'
import StorageTable from '../../components/storage/StorageTable'

function Storage({ data }) {
  const pageTitle = (
    <h1>
      Your <span className="text-secondary underline underline-offset-2">Storage</span>
    </h1>
  )

  return (
    <Layout pageTitle={pageTitle}>
      <div className="flex flex-col space-y-5 px-12">
        <p className="rounded-lg bg-info py-3 px-4 text-center text-xs text-info-content hover:opacity-75 sm:text-left sm:text-base">
          Here you can see all of the files that you uploaded to IPFS
        </p>
        <StorageTable data={data.data} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabaseServerClient.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  const result = await axios.get(`${server}/api/ipfs`, { params: { userId: user.id } })

  return { props: { data: result.data } }
}

export default Storage
