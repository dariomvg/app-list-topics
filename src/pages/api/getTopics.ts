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
    const results = await sql`SELECT * FROM list`;
    res.status(200).json(results);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al recuperar los temas", error });
  }
}
