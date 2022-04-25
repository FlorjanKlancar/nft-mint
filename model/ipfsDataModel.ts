export type ipfsDataModel = {
  count: number
  rows: ipfsRow[]
}

type ipfsRow = {
  date_pinned: string
  date_unpinned: boolean
  id: string
  ipfs_pin_hash: string
  metadata: { name: string; keyvalues: boolean }
  regions: string[]
  size: number
  user_id: string
}
