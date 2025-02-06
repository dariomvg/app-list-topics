"use client";
import { useContextUser } from "@/context/ContextUser";
import {
  addComment,
  addTopic,
  deleteComment,
  getTopics,
} from "@/libs/requests";
import { ObjTopic, UseTopics } from "@/types/types";
import { objTopic } from "@/utils/topic";
import { useEffect, useState } from "react";

const objTest = [
  {
    id: 0,
    name: "Que es la fisica cuantica",
    details:
      "que temas trata de explicar, que áreas de la física aborda, quienes son los mayores referentes de esta teoría",
    link: "que-es-la-fisica-cuantica",
    range: 1,
    creator: "pepe",
    comments: [
      {
        id: 0,
        user: "Dariogod",
        date: "11/01/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita perferendis porro, placeat optio cupiditate ipsam est in ex tenetur, reprehenderit sequi vitae dolorem eligendi corporis?",
      },
    ],
  },
  {
    id: 1,
    name: "Programacion desde cero",
    details:
      "que problemas busca solucionar, en que ramas del mundo IT interviene, que significa programar y como empezar desde cero",
    link: "programacion-desde-cero",
    range: 2,
    creator: "pepito",
    comments: [
      {
        id: 0,
        user: "pepitogod",
        date: "12/01/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita perferendis porro, placeat optio cupiditate ipsam est in ex tenetur, reprehenderit sequi vitae dolorem eligendi corporis?",
      },
      {
        id: 1,
        user: "pepe",
        date: "13/02/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita",
      },
    ],
  },
];

export const useTopics = (): UseTopics => {
  const [topics, setTopics] = useState<ObjTopic[]>(objTest);
  const [topic, setTopic] = useState<ObjTopic>(objTopic);
  const { username } = useContextUser();

  const formatString = (text: string): string => {
    return text.trim().toLowerCase().replace(/\s+/g, "-");
  };

  const addNewTopic = async (topic: ObjTopic) => {
    const link = formatString(topic.name);
    const newTopic = {
      ...topic,
      link,
      creator: username,
      range: 1,
    };
    const topicAdded = await addTopic(newTopic);
    console.log(topicAdded);
  };

  const addNewComment = async (comment: string, idTopic: number) => {
    const newComment = await addComment(comment, idTopic);
    console.log(newComment);
  };

  const removeComment = async (id: number) => {
    const commentRemoved = await deleteComment(id);
    console.log(commentRemoved);
  };

  const resetSearch = () => {
    setTopic(objTopic);
  };

  const searchTopic = (name: string) => {
    const foundTopic = topics.find(
      (topic) => topic.name.toLowerCase() === name.toLowerCase()
    );
    if (foundTopic) setTopic(foundTopic);
  };

  useEffect(() => {
    const getAllTopics = async () => {
      const allTopics = await getTopics();
      console.log(allTopics);
    };
    getAllTopics();
  }, [addNewComment, addNewTopic]);

  return {
    topics,
    addNewTopic,
    addNewComment,
    removeComment,
    searchTopic,
    topic,
    resetSearch,
  };
};
