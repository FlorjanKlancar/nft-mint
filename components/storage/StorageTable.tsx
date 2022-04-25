import Image from 'next/image'
import React from 'react'
import { ipfsURL } from '../../config'
import { supabaseImageModel } from '../../model/supabaseImageModel'

interface StorageTableProps {
  data: supabaseImageModel[]
}

function StorageTable({ data }: StorageTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>

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
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-24 w-36">
                        <Image
                          src={`${ipfsURL}/${item.id}`}
                          alt="Avatar Tailwind CSS Component"
                          className=""
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="badge badge-ghost hover:opacity-75">
                        <a href={`${ipfsURL}/${item.id}`} target="_blank" rel="noopener noreferrer">
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
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StorageTable
