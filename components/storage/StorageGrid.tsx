import React from 'react'
import axios from 'axios'

function StorageGrid({ result }) {
  console.log('result frontend', result)
  return <div>StorageGrid</div>
}

export async function getServerSideProps() {
  // Fetch data from external API
  const result = await axios.get('http://localhost:3000/api/ipfs')
  console.log('resultz', result)
  // Pass data to the page via props
  return { props: { result } }
}

export default StorageGrid
