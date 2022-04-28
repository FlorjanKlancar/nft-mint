import React from 'react'
import Layout from '../components/layout/Layout'

function Dashboard() {
  const pageTitle = (
    <h1>
      <span className="text-secondary underline underline-offset-2">Dashboard</span>
    </h1>
  )

  return (
    <Layout pageTitle={pageTitle}>
      <div className="flex flex-col space-y-5 px-4 md:px-12">
        <p>In progress...</p>
      </div>
    </Layout>
  )
}

export default Dashboard
