import { NextApiResponse, NextApiRequest } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query

  return res.json({
    id: id,
    image: "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/01/USE_Pagoda-overlooking-Mount-Fuji-Japan_Credit_GettyImages-520571022.jpg?w=2200&h=880&crop=1",
    name: "テストぷろぱてぃー漢字",
    description: "テストせつめい説明",
    attributes: [
      {
        trait_type: "テストあとりびゅーと漢字",
        value: "テストあとりびゅーと漢字"
      },
      {
        trait_type: "感情",
        value: "私はここで何をしているんだ"
      },
      {
        display_type: "date",
        trait_type: "生まれる",
        value: 1664468607
      },
    ]
  })

}

export default handler
