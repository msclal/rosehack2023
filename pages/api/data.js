// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import df from '../../public/my_data.json'

export default function handler(req, res) {
    res.status(200).json(df)
  }
  