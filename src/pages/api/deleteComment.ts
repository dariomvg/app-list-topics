import { sql } from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(400).json({ message: "Método no disponible" });
  }

  try {
    const { idComment, idTopic } = req.query;
    console.log(idTopic, idComment);
    if (idTopic && idComment) {
      await sql`
        UPDATE list 
        SET comments = (
          SELECT jsonb_agg(comment)
          FROM jsonb_array_elements(comments) AS comment
          WHERE (comment->>'id')::bigint <> ${idComment}
        )
        WHERE id = ${idTopic}
        RETURNING comments;
      `;

      res.status(200).json({ message: "Comentario eliminado correctamente" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error al borrar el comentario", error });
  }
}
