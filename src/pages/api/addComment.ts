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
    const { comment, idTopic } = req.body;
    await sql`UPDATE list SET comments = comments || ${comment}::jsonb WHERE id = ${idTopic};`;

    res.status(200).json({ message: "Comentario agregado correctamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error al agregar nuevo comentario", error });
  }
}
