import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'
import { CodeIcon, TerminalIcon } from '@heroicons/react/outline'

function Info() {
  const nftInfo = [
    {
      title: 'Smart contract',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'indigo'
    },
    {
      title: 'NFT Minting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <TerminalIcon className="mt-1 h-6 w-6" />,
      color: 'cyan'
    },
    {
      title: 'Dummy text 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'amber'
    },
    {
      title: 'Dummy text 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima odit aspernatur aliquam deleniti in corporis omnis cupiditate optio, voluptatum quasi reiciendis dolor, nostrum nihil quaerat est, doloremque mollitia possimus.',
      bottomText: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttonText: 'Generate contract',
      icon: <CodeIcon className="mt-1 h-6 w-6" />,
      color: 'pink'
    }
  ]

  const colors = {
    indigo: {
      text: 'text-indigo-600',
      background: 'bg-indigo-600 hover:bg-indigo-700'
    },
    cyan: {
      text: 'text-cyan-600',
      background: 'bg-cyan-600 hover:bg-cyan-700'
    },
    amber: {
      text: 'text-amber-600',
      background: 'bg-amber-600 hover:bg-amber-700'
    },

    pink: {
      text: 'text-pink-600',
      background: 'bg-pink-600 hover:bg-pink-700'
    }
  }

  return (
    <CreateNFTLayout>
      <div className="mt-8 grid grid-cols-1 justify-center gap-12 py-4 text-center md:grid-cols-2 md:px-12 ">
        {nftInfo.map((nft, index) => (
          <div
            className={`flex flex-col space-y-3 rounded-lg border-2 border-primary border-opacity-25 bg-base-200 p-5 ${
              colors[nft.color].text
            } hover:bg-base-100`}
            key={index}
          >
            <div className={`flex justify-center space-x-4 font-bold`}>
              <div className={`text-lg`}>{nft.title}</div>
              {nft.icon}
            </div>

            <hr className="border-primary border-opacity-25" />

            <div>
              <p className="text-gray-400">{nft.description}</p>
            </div>

            <div className="text-sm text-green-500 dark:text-green-600">
              <p>{nft.bottomText}</p>
            </div>

            <div>
              <button
                className={`rounded-lg ${
                  colors[nft.color].background
                } bg-primary/60 py-2 px-12 text-white hover:bg-primary md:px-24`}
              >
                {nft.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </CreateNFTLayout>
  )
}

export default Info
