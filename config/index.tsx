const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://nft-mint-sigma.vercel.app'

export const ipfsURL = 'https://gateway.pinata.cloud/ipfs'
