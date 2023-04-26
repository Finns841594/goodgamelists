import type { NextApiRequest, NextApiResponse } from 'next'
import { games } from '../../data/games'

type GameData = {
    _id: string,
    name: string,
    imgUrl: string,
    tgaYear: string,
    tgaWinner: boolean,
    played: boolean,
    metaData: {}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData[]>
) {
  res.status(200).json(games)
}