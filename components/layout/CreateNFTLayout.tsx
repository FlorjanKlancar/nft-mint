import React from 'react'
import CreateNFTHeader from '../navbar/CreateNFTHeader'
import Layout from './Layout'

function CreateNFTLayout({ children }) {
  return (
    <>
      <Layout>
        <div className="px-4 py-4 lg:px-24 lg:py-12">
          <CreateNFTHeader />
          {children}
        </div>
      </Layout>
    </>
  )
}

export default CreateNFTLayout