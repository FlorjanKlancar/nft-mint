import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { supabaseServerClient } from '../../utils/server/supabaseServer'
import { server } from '../../config'
import StorageTable from '../../components/storage/StorageTable'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { toast } from 'react-toastify'

function Storage({ data }) {
  const { accessToken } = useUser()
  const [files, setFiles] = useState(data.data)

  const pageTitle = (
    <h1>
      Your <span className="text-secondary underline underline-offset-2">File</span> Storage
    </h1>
  )

  const deleteHandler = async (ipfsHash: string) => {
    setFiles((prevState) => prevState.filter((file) => file.id !== ipfsHash))

    const result = await axios.delete(`/api/ipfs/${ipfsHash}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (result.status === 200) {
      toast.success('File deleted')
    }
  }

  const editHandler = async (ipfsHash: string) => {
    console.log('edit', ipfsHash)
  }

  return (
    <Layout pageTitle={pageTitle}>
      <div className="flex flex-col space-y-5 px-4 md:px-12">
        <p className="rounded-lg bg-info py-3 px-4 text-center text-xs text-info-content hover:opacity-75 sm:text-left sm:text-base">
          Here you can see all of the files that you uploaded to IPFS
        </p>
        <StorageTable data={files} deleteHandler={deleteHandler} editHandler={editHandler} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabaseServerClient.auth.api.getUserByCookie(req)

  if (!user) {
    return { redirect: { destination: '/login' } }
  }

  const result = await axios.get(`${server}/api/ipfs`, { params: { userId: user.id } })

  return { props: { data: result.data } }
}

export default Storage
