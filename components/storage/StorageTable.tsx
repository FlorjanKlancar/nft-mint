import Image from 'next/image'
import React from 'react'
import { ipfsURL } from '../../config'
import { supabaseImageModel } from '../../model/supabaseImageModel'
import { DotsVerticalIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { Scrollbars } from 'react-custom-scrollbars'

interface StorageTableProps {
  data: supabaseImageModel[]
  handleEdit: (id: string) => void
  handleDelete: (id: string) => void
}

function StorageTable({ data, handleDelete, handleEdit }: StorageTableProps) {
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
                <th>Type</th>
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
                          <div className="mask mask-squircle h-24 w-36 items-center justify-center">
                            <Image
                              src={`${ipfsURL}/${item.id}`}
                              alt="Avatar"
                              className=""
                              layout="fill"
                            />
                          </div>
                        </div>
                        <div>
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
                    <td>{item.size}</td>
                    <td>{item.type}</td>
                    <th>
                      <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                          <DotsVerticalIcon className="h-5 w-5" />{' '}
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu rounded-box w-52 border-2 border-base-200 bg-base-100 p-2 shadow"
                        >
                          <li onClick={() => handleEdit(item.id)}>
                            <div>
                              <PencilAltIcon className="h-5 w-5" />
                              <span>Edit item</span>
                            </div>
                          </li>
                          <li onClick={() => handleDelete(item.id)}>
                            <div>
                              <TrashIcon className="h-5 w-5" />
                              <span>Delete item</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No data</td>
                </tr>
              )}
            </tbody>
            <tfoot className="sticky bottom-0">
              <tr>
                <th colSpan={5} className="">
                  Uploaded files count: {data.length}
                </th>
              </tr>
            </tfoot>
          </table>
        </Scrollbars>
      </div>
    </div>
  )
}

export default StorageTable
