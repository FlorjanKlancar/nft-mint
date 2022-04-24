import React, { useRef, useState, useEffect } from 'react'
import { PhotographIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useUser } from '@supabase/supabase-auth-helpers/react'

type ImagePrevProps = {
  setNftFormFields: (prevState) => void
}

const ImageUpload = ({ setNftFormFields }: ImagePrevProps) => {
  const { accessToken } = useUser()
  const [file, setFile] = useState()
  const [fileIpfsHash, setFileIpfsHash] = useState()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>()

  const filePickerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', file)
    const result = await axios.post('/api/ipfs', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    toast.info('File uploaded to IPFS, hash: ' + result.data.pinataFile.IpfsHash)
    console.log(result.data)
    setFileIpfsHash(result.data.pinataFile.IpfsHash)
  }

  const pickImageHandler = () => {
    filePickerRef.current?.click()
  }

  const pickedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile
    if (
      (event.target as HTMLInputElement).files &&
      (event.target as HTMLInputElement).files.length === 1
    ) {
      pickedFile = (event.target as HTMLInputElement).files[0]
      setFile(pickedFile)
    } else {
      setPreviewUrl(null)
    }
    setNftFormFields((prevState) => ({ ...prevState, nftImage: pickedFile }))
  }
  return (
    <>
      <div className="relative m-auto w-full">
        <input
          ref={filePickerRef}
          className="hidden"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={pickedHandler}
        />
        <div
          className={`m-auto flex h-[440px] max-w-md items-center rounded-lg  border-2 border-primary/50 p-5 shadow-2xl`}
          onClick={pickImageHandler}
        >
          {previewUrl ? (
            <Image
              layout={'fill'}
              src={previewUrl ? previewUrl.toString() : undefined}
              alt="Preview"
              className="h-[415px] rounded-lg"
            />
          ) : (
            <div className="flex w-full flex-col items-center justify-center">
              <PhotographIcon className="h-20 w-20 text-primary/50" />
              <p className="mt-2 w-full text-center">Please pick an image</p>
              <p className="text-sm text-gray-400">Image must be in format .jpg, .jpeg or .png</p>
            </div>
          )}
        </div>
      </div>
      {previewUrl && !fileIpfsHash && (
        <label className={'btn btn-secondary'} onClick={() => uploadToServer()}>
          <PhotographIcon className="mr-2 h-6 w-6" />
          Upload to ipfs
        </label>
      )}
      {previewUrl && fileIpfsHash && (
        <CopyToClipboard text={fileIpfsHash}>
          <div
            className={'btn btn-outline truncate'}
            onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
          >
            {' '}
            <ClipboardCopyIcon className="w-6" /> {fileIpfsHash}
          </div>
        </CopyToClipboard>
      )}
    </>
  )
}

export default ImageUpload
