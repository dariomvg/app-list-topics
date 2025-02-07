import { sql } from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Método no disponible" });
  }

  try {
    const topic = req.body;

    const { title, link, details, comments, range, creator } = topic;

    const result =
      await sql`INSERT INTO list (title, details, link, comments, range, creator) 
VALUES (
    ${title}, 
    ${details}, 
    ${link}, 
    ${comments}::jsonb, 
    ${range}, 
    ${creator}
);`;
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error al agregar nuevo tema", error });
  }
}
