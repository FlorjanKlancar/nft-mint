import React from 'react'
import NavigationBar from '../navbar/NavigationBar'
import PageTitle from './PageTitle'
import SiteHeaderInfo from './SiteHeaderInfo'

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: React.ReactNode
  pageSubTitle?: React.ReactNode
}

function Layout({ children, pageTitle, pageSubTitle }: LayoutProps) {
  return (
    <>
      <div>
        <SiteHeaderInfo />

        <NavigationBar />

        <div id="container_dashboard" className="bg-base-100">
          <PageTitle pageTitle={pageTitle} pageSubTitle={pageSubTitle} />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
