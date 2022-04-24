import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function CreateNFTHeader() {
  const router = useRouter()
  return (
    <div className="py-4 md:px-12">
      <div className="flex w-full flex-col items-center justify-between rounded-lg bg-base-content/30 p-5 px-8 text-base-content shadow-secondary/20 md:flex-row">
        <div className="text-xl font-semibold">Mint NFTs</div>
        <div className="mt-4 flex w-full flex-col justify-around space-y-3 text-center text-lg text-gray-600 md:mt-0 md:w-3/4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/nft/info" passHref>
            <div
              className={`rounded-lg md:w-1/3 ${
                router.pathname == '/nft/info'
                  ? 'bg-base-content/20 text-primary-focus'
                  : 'text-base-300'
              } py-1 hover:bg-base-content/20 hover:text-primary-focus`}
            >
              <button className="w-full 2xl:text-xl">Info</button>
            </div>
          </Link>

          <Link href="/nft/contract" passHref>
            <div
              className={`rounded-lg md:w-1/3 ${
                router.pathname == '/nft/contract'
                  ? 'bg-base-content/20 text-primary-focus'
                  : 'text-base-300'
              } py-1 hover:bg-base-content/20 hover:text-primary-focus`}
            >
              <button className="w-full 2xl:text-xl">Generate contract</button>
            </div>
          </Link>

          <Link href="/nft/mint" passHref>
            <div
              className={`rounded-lg md:w-1/3 ${
                router.pathname == '/nft/mint'
                  ? 'bg-base-content/20 text-primary-focus'
                  : 'text-base-300'
              } py-1 hover:bg-base-content/20 hover:text-primary-focus`}
            >
              <button className="w-full 2xl:text-xl">Mint NFT</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateNFTHeader
