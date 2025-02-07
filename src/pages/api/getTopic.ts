import { sql } from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Método no disponible" });
  }

  try {
    const { link } = req.query;

    if (link) {
      const result = await sql`SELECT * FROM list WHERE link=${link}`;
      res.status(200).json(result);
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al recuperar el tema", error });
  }
}
