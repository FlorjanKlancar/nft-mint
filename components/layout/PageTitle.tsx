import React from 'react'

interface PageTitleProps {
  pageTitle?: React.ReactNode
  pageSubTitle?: React.ReactNode
}

function PageTitle({ pageTitle, pageSubTitle }: PageTitleProps) {
  return (
    <>
      {pageTitle && (
        <div className="my-4 mx-4 flex flex-col space-y-3 rounded-xl bg-base-200 py-4 shadow shadow-secondary/50 md:mx-12">
          <div className="px-5 text-center text-xl text-base-content sm:px-12 sm:text-left sm:text-2xl md:text-4xl">
            {pageTitle && pageTitle}
          </div>

          {pageSubTitle && (
            <>
              <hr className="mx-2 divide-y" />
              {pageSubTitle}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default PageTitle
