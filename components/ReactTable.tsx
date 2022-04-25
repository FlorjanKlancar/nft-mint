import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { supabaseImageModel } from '../model/supabaseImageModel'

interface ReactTableProps {
  data: supabaseImageModel[]
}

function ReactTable({ data: ReactTableData }: ReactTableProps) {
  console.log('ReactTableData', ReactTableData)

  const data = useMemo(
    () =>
      ReactTableData.map((item) => ({
        col1: (
          <div className="flex items-center space-x-3" key={item.id}>
            <div className="avatar">
              <div className="mask mask-squircle h-24 w-36">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                  className="bg-white"
                />
              </div>
            </div>
            <div>
              <div className="text-sm opacity-50">{item.id}</div>
            </div>
          </div>
        ),
        col2: item.name,
        col3: item.size,
        col4: item.type
      })),
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Pinata path',
        accessor: 'col1' // accessor is the "key" in the data
      },
      {
        Header: 'File name',
        accessor: 'col2'
      },
      {
        Header: 'Size',
        accessor: 'col3' // accessor is the "key" in the data
      },
      {
        Header: 'Type',
        accessor: 'col4' // accessor is the "key" in the data
      }
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  )

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full text-center" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="flex flex-row justify-center">
                    {column.render('Header')}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownIcon className="mt-0.5 ml-2 h-3 w-3" />
                      ) : (
                        <ArrowUpIcon className="mt-0.5 ml-2 h-3 w-3" />
                      )
                    ) : (
                      ''
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ReactTable
