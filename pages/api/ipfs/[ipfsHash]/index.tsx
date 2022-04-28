import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServerClient } from '../../../../utils/server/supabaseServer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    default:
    case 'DELETE':
      {
        const { ipfsHash } = req.query

        try {
          const { data } = await supabaseServerClient.from('files').delete().match({ id: ipfsHash })

          if (data) {
            res.status(200).send(`Deleted row ${ipfsHash}`)
          }
        } catch (e) {
          console.log(e)
          return res.status(500).send(e)
        }
      }
      break
  }
}
