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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const formatString = (text: string): string => {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
};

const createDate = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const useTopics = (): UseTopics => {
  const [topics, setTopics] = useState<ObjTopic[]>([]);
  const [topic, setTopic] = useState<ObjTopic>(objTopic);
  const [loading, setLoading] = useState<boolean>(true);

  const { username } = useContextUser();
  const router = useRouter();

  const addNewTopic = async (topic: ObjTopic) => {
    const link = formatString(topic.title);
    const newTopic = {
      ...topic,
      link,
      creator: username,
      range: 1,
    };
    await addTopic(newTopic);
    router.push("/");
  };

  const addNewComment = async (comment: string, idTopic: number) => {
    const newComment = {
      id: Date.now(),
      user: username,
      comment,
      date: createDate(),
    };
    await addComment(newComment, idTopic);
    window.location.reload();
  };

  const removeComment = async (idComment: number, idTopic: number) => {
    await deleteComment(idComment, idTopic);
    window.location.reload();
  };

  const resetSearch = () => {
    setTopic(objTopic);
  };

  const searchTopic = (name: string) => {
    const foundTopic = topics.find(
      (topic) => topic.title.toLowerCase() === name.toLowerCase()
    );
    if (foundTopic) setTopic(foundTopic);
  };

  const orderListTopics = (list: ObjTopic[]): ObjTopic[] => {
    return list.sort((a, b) => b.comments.length - a.comments.length);
  };

  useEffect(() => {
    const getAllTopics = async () => {
      try {
        const allTopics = await getTopics();
        const topicsOrdered = orderListTopics(allTopics);
        if (topicsOrdered) setTopics(topicsOrdered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllTopics();
  }, []);

  return {
    topics,
    addNewTopic,
    addNewComment,
    removeComment,
    searchTopic,
    topic,
    resetSearch,
    loading,
  };
};
