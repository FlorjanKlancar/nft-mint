import React from 'react'
import CreateNFTHeader from '../navbar/CreateNFTHeader'
import Layout from './Layout'

function CreateNFTLayout({ children }) {
  const pageTitle = (
    <h1>
      Create <span className="text-secondary underline underline-offset-2">NFT</span>
    </h1>
  )

  return (
    <>
      <Layout pageTitle={pageTitle}>
        <div className="px-4 py-4 lg:px-24 lg:py-3">
          <CreateNFTHeader />
          {children}
        </div>
      </Layout>
    </>
  )
}

export default CreateNFTLayout
