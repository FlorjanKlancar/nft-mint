import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServerClient } from '../../../utils/server/supabaseServer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    default:
    case 'GET':
      {
        const nfts = await supabaseServerClient.from('nfts').select('*')

        if (nfts) {
          res.status(200).json(nfts)
        }
      }
      break
  }
}
