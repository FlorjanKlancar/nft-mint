import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { server } from '../../config'
import StorageTable from '../../components/storage/StorageTable'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import StorageTableSkeleton from '../../components/storage/StorageTableSkeleton'
import toast from 'react-hot-toast'

function Storage() {
  const { accessToken, user } = useUser()
  const [files, setFiles] = useState([])

  const pageTitle = (
    <h1>
      Your <span className="text-secondary underline underline-offset-2">File</span> Storage
    </h1>
  )

  const getIPFSData = async () => {
    const result = await axios.get(`${server}/api/ipfs`, { params: { userId: user.id } })

    setFiles(result.data.data)
    console.log('result from client', result.data.data)
  }

  const deleteHandler = async (ipfsHash: string) => {
    setFiles((prevState) => prevState.filter((file) => file.id !== ipfsHash))

    const deleteToast = toast.loading('Deleting file...')
    const result = await axios.delete(`/api/ipfs/${ipfsHash}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (result.status === 200) {
      toast.success('File deleted successfully', {
        id: deleteToast
      })
    }
  }

  const editHandler = async (ipfsHash: string) => {
    console.log('edit', ipfsHash)
  }

  useEffect(() => {
    setTimeout(function () {
      getIPFSData()
    }, 1000)
  }, [])

  return (
    <Layout pageTitle={pageTitle}>
      <div className="flex flex-col space-y-5 px-4 md:px-12">
        <p className="rounded-lg bg-info py-3 px-4 text-center text-xs text-info-content hover:opacity-75 sm:text-left sm:text-base">
          Here you can see all of the files that you uploaded to IPFS
        </p>
        {files.length ? (
          <StorageTable data={files} deleteHandler={deleteHandler} editHandler={editHandler} />
        ) : (
          <StorageTableSkeleton amount={5} />
        )}
      </div>
    </Layout>
  )
}

export default Storage
