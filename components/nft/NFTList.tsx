import React from 'react'
import { nftModel } from '../../model/nftModel'

interface NFTListProps {
  dummyNFT: nftModel[]
}

function NFTList({ dummyNFT }: NFTListProps) {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center px-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {dummyNFT.map((nft) => (
        <div
          key={nft.nftTitle}
          className="my-2 flex w-full cursor-pointer  flex-col items-center justify-center space-y-2 rounded-xl border-2 border-neutral/5 bg-base-300 bg-gradient-to-b shadow-lg shadow-neutral/30 transition-all duration-300 sm:w-3/4 md:w-5/6 md:justify-start md:hover:scale-110 lg:my-8  xl:w-[250px]"
        >
          <div className="w-full items-center rounded-lg bg-gradient-to-br from-blue-500 via-gray-500 to-rose-400 p-1 md:w-full">
            <img
              src={nft.nftImage}
              className="h-72 w-full rounded-lg object-cover  xl:h-64"
              alt={nft.nftTitle}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-base-content">{nft.nftTitle}</h1>
          </div>

          <div className="px-3 pb-4 text-sm text-base-content/60">{nft.nftDescription}</div>
        </div>
      ))}
    </div>
  )
}

export default NFTList
