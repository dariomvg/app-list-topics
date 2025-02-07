import { ObjComment, ObjTopic } from "@/types/types";

export const getTopics = async () => {
  const response = await fetch(`/api/getTopics`);
  const results = await response.json();
  return results;
};

export const getTopic = async (link: string) => {
  const response = await fetch(`/api/getTopic?link=${link}`);
  const result = await response.json();
  return result;
};

export const addComment = async (comment: ObjComment, idTopic: number) => {
  await fetch("/api/addComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment, idTopic }),
  });
};

export const addTopic = async (topic: ObjTopic) => {
  const response = await fetch("/api/addTopic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(topic),
  });
  const result = await response.json();
  return result;
};

export const deleteComment = async (idComment: number, idTopic: number) => {
  await fetch(`/api/deleteComment?idTopic=${idTopic}&idComment=${idComment}`, {
    method: "DELETE",
  });
};
