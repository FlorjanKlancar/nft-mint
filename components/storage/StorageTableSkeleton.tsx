import { DotsVerticalIcon } from '@heroicons/react/outline'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

interface StorageTableSkeletonProps {
  amount: number
}

function StorageTableSkeleton({ amount }: StorageTableSkeletonProps) {
  function renderSkeletons(amount: number) {
    const skeletons = []
    for (let i = 0; i < amount; i++) {
      skeletons.push(
        <tr key={i}>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle relative h-24 w-36 animate-pulse items-center justify-center rounded-lg  bg-slate-500 object-cover"></div>
              </div>
              <div className="w-full">
                <span className="badge badge-ghost w-full animate-pulse hover:opacity-75"></span>
              </div>
            </div>
          </td>
          <td>
            <div className="-mt-1 h-5 w-full animate-pulse rounded-full bg-slate-500" />
          </td>
          <td>
            <div className="flex flex-col items-center space-y-2">
              <div className="mt-2 h-5 w-20 animate-pulse rounded-full bg-slate-500" />
              <div className="badge badge-secondary badge-outline h-4 w-16 animate-pulse bg-secondary/80 text-xs"></div>
            </div>
          </td>

          <th>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost">
                <DotsVerticalIcon className="h-5 w-5" />
              </label>
            </div>
          </th>
        </tr>
      )
    }
    return skeletons
  }

  const displaySkeletons = renderSkeletons(amount)
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
            <tbody>{displaySkeletons}</tbody>
            <tfoot className="sticky bottom-0">
              <tr>
                <th colSpan={5} className="">
                  <div className="flex justify-end space-x-2">
                    <div className="mt-0.5">Uploaded files count:</div>
                    <div className="h-5 w-5 animate-pulse rounded-lg bg-slate-500" />
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
        </Scrollbars>
      </div>
    </div>
  )
}

export default StorageTableSkeleton
