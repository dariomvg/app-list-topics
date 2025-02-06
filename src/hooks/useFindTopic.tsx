"use client";
import { ObjTopic, UseFindTopic } from "@/types/types";
import { objTopic } from "@/utils/topic";
import { useEffect, useState } from "react";
import { useTopics } from "./useTopics";

export const useFindTopic = (name: string): UseFindTopic => {
  const [currentTopic, setCurrentTopic] = useState<ObjTopic>(objTopic);
  
  const { topics } = useTopics();

  useEffect(() => {
    if (name) {
      const findCurrentTopic = () => {
        const foundTopic = topics.find((topic) => topic.link === name);
        if (foundTopic) {
          setCurrentTopic(foundTopic);
        }
      };
      findCurrentTopic();
    }
  }, [name]);

  return { currentTopic };
};
