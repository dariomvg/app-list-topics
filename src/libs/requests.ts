import { ObjTopic } from "@/types/types";
import { URL } from "@/utils/config";

export const addComment = async (comment: string, idTopic: number) => {
  console.log(comment, idTopic);
};

export const deleteComment = async (id: number) => {
  console.log(id);
};

export const addTopic = async (topic: ObjTopic) => {
  console.log(topic);
};

export const getTopics = async () => {};
