import { BeakerIcon, ChartPieIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Menu() {
  const router = useRouter()
  const dummyMenu = [
    {
      name: 'Dashboard',
      link: '/',
      icon: <ChartPieIcon className="mt-1 h-5 w-5" />
    },
    {
      name: 'Create NFT',
      link: '/nft/info',
      icon: <BeakerIcon className="mt-1 h-5 w-5" />
    },
    {
      name: "NFT's",
      link: '/nfts',
      icon: <ClipboardCheckIcon className="mt-1 h-5 w-5" />
    },
    {
      name: 'Storage',
      link: '/storage',
      icon: <ClipboardCheckIcon className="mt-1 h-5 w-5" />
    }
  ]

  const routerCheckStyle = (routerPath: string, itemLink: string) => {
    if (routerPath === itemLink) return true
    else {
      const splitArray = itemLink.split('/')
      console.log('splitArray', splitArray[1])

      if (splitArray[1].length) {
        if (routerPath.includes(`${splitArray[1]}/`)) return true
      } else return false
    }
  }

  return (
    <div className="space-y-4 p-3 text-gray-300">
      <div className="mt-2 space-y-14 px-4 ">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-gray-400">Menu</h1>
          </div>
        </div>
      </div>

      {dummyMenu.map((item) => (
        <Link href={item.link} key={item.link} passHref>
          <div
            className={
              routerCheckStyle(router.pathname, item.link)
                ? 'border-r-4 border-primary font-bold text-primary underline decoration-2 underline-offset-4 hover:border-r-0'
                : ' text-gray-400'
            }
          >
            <div
              className={`flex cursor-pointer space-x-2 border-primary p-3 text-base  decoration-2 underline-offset-4  transition-all duration-150 ease-in-out hover:border-r-4 hover:text-primary hover:underline`}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Menu
