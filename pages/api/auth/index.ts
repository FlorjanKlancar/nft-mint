import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServerClient } from '../../../utils/server/supabaseServer'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  supabaseServerClient.auth.api.setAuthCookie(req, res)
}

export default handler
