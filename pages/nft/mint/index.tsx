import React, { useState } from 'react'
import axios from 'axios'
import { nftModel } from '../../../model/nftModel'
import ImagePrev from '../../../components/nft/ImagePrev'
import CreateNFTLayout from '../../../components/layout/CreateNFTLayout'

function CreateNFT() {
  const [ipfsFiles] = useState([])
  const [nftFormFields, setNftFormFields] = useState<nftModel>({
    nftTitle: '',
    nftDescription: '',
    nftBlockchain: '',
    nftMetadata: '',
    nftImage: ''
  })

  const handleChange = (e) =>
    setNftFormFields((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))

  const submitHandler = async (e) => {
    e.preventDefault()

    const body = new FormData()
    body.append('file', nftFormFields.nftImage)

    const response = await axios.post('/api/nft/create', body)
    console.log(response)
  }

  return (
    <CreateNFTLayout>
      <form onSubmit={submitHandler}>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative " htmlFor="">
            <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
            <div className="w-5/6  rounded-lg bg-gray-50 p-5 shadow-2xl ">
              <div className="h-full ">
                <label className="mb-2 inline-block text-gray-500">Select previous images</label>

                <div className="grid max-h-72 grid-cols-4 overflow-y-auto">
                  {ipfsFiles.map((file) => (
                    <div key={file.metadata.name} className="m-3 h-32 w-32 border-2">
                      {file.metadata.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </label>
        </label>

        <div className="flex w-full flex-col justify-center  md:flex-row md:py-12 md:px-6 ">
          <div className="order-last flex w-full flex-col items-center space-y-3 md:order-first md:w-1/2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Title</span>
              </label>
              <input
                name="nftTitle"
                type="text"
                placeholder="Enter NFT Title"
                className="input input-bordered input-primary w-full max-w-xs "
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Description</span>
              </label>
              <textarea
                name="nftDescription"
                className="textarea textarea-primary "
                placeholder="Describe your NFT"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">Amount</span>
              </label>
              <input
                name="nftAmount"
                type="number"
                placeholder="Enter NFT Amount"
                className="input input-bordered input-primary w-full max-w-xs "
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Blockchain</span>
              </label>
              <select
                name="nftBlockchain"
                className="select select-primary w-full max-w-xs "
                placeholder={'props.placeholder'}
                value={nftFormFields.nftBlockchain}
                onChange={handleChange}
              >
                <option value={0} disabled>
                  Select Blockchain
                </option>
                <option>Ethereum</option>
                <option>Polygon</option>
                <option>Blabla</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">NFT Metadata</span>
              </label>
              <textarea
                className="textarea textarea-primary "
                placeholder="Metadata"
                name="nftMetadata"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="w-full max-w-xs">
              <button className="btn btn-primary mt-8 w-full" type="submit">
                Create NFT
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-4 md:w-1/2">
            <ImagePrev setNftFormFields={setNftFormFields} />

            <div className="divider m-auto w-1/2">OR</div>

            <div className="grid place-items-center ">
              <label
                className="w-3/4 cursor-pointer	rounded-full px-2 py-3  text-center font-bold text-primary underline decoration-primary decoration-2 underline-offset-2 hover:text-primary-focus  sm:w-1/3 md:w-1/2"
                htmlFor="my-modal-4"
              >
                Pick from album
              </label>
            </div>
          </div>
        </div>
      </form>
    </CreateNFTLayout>
  )
}

export default CreateNFT
