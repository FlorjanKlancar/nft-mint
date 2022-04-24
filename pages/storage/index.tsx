import React from 'react'
import Layout from '../../components/layout/Layout'
import StorageGrid from '../../components/storage/StorageGrid'

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

export default Storage
