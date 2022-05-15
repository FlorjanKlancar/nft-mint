import Image from 'next/image'
import React from 'react'
import { ipfsURL } from '../../config'
import { supabaseImageModel } from '../../model/supabaseImageModel'
import { DotsVerticalIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { Scrollbars } from 'react-custom-scrollbars'

interface StorageTableProps {
  data: supabaseImageModel[]
  editHandler: (id: string) => void
  deleteHandler: (id: string) => void
}

function StorageTable({
  data,
  deleteHandler: handleDelete,
  editHandler: handleEdit
}: StorageTableProps) {
  return (
    <div className="w-full overflow-x-auto ">
      <div className="z-50 rounded-xl border-2 border-base-200">
        <Scrollbars style={{ height: 630 }}>
          <table className="table w-full text-center">
            <thead className="sticky top-0 z-20">
              <tr>
                <th>Pinata path</th>
                <th>File name</th>
                <th>Size</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle relative h-24 w-36 items-center justify-center">
                            <Image
                              src={`${ipfsURL}/${item.id}`}
                              alt="Avatar"
                              layout="fill"
                              placeholder="blur"
                              blurDataURL="/placeholder.webp"
                            />
                          </div>
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="Click to open in new tab">
                          <span className="badge badge-ghost hover:opacity-75">
                            <a
                              className="link link-accent"
                              href={`${ipfsURL}/${item.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.id}
                            </a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <div className="flex flex-col items-center">
                        <div>{(item.size / 1000).toFixed(2)}KB</div>
                        <div className="badge badge-secondary badge-outline text-xs">
                          {item.type}
                        </div>
                      </div>
                    </td>

                    <th>
                      <div className="dropdown-end dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                          <DotsVerticalIcon className="h-5 w-5" />{' '}
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu rounded-box w-52 border-2 border-base-200 bg-base-100 p-2 shadow"
                        >
                          <li onClick={() => handleEdit(item.id)}>
                            <label htmlFor="my-modal-4">
                              <div className="flex space-x-3">
                                <PencilAltIcon className="h-5 w-5" />
                                <label htmlFor="my-modal-4">Edit item</label>
                              </div>
                            </label>
                          </li>
                          <li onClick={() => handleDelete(item.id)}>
                            <label>
                              <div className="flex space-x-3 text-red-500">
                                <TrashIcon className="h-5 w-5 " />
                                <span>Delete item</span>
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No files on IPFS</td>
                </tr>
              )}
            </tbody>
            {data.length > 0 && (
              <tfoot className="sticky bottom-0">
                <tr>
                  <th colSpan={5} className="text-left 2xl:text-right">
                    Uploaded files count: {data.length}
                  </th>
                </tr>
              </tfoot>
            )}
          </table>
        </Scrollbars>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal modal-bottom cursor-pointer md:modal-middle">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Edit file {}</h3>
          <p className="py-4">
            You have been selected for a chance to get one year of subscription to use Wikipedia for
            free!
          </p>
        </label>
      </label>
    </div>
  )
}

export default StorageTable
