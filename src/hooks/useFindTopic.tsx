"use client";
import { ObjTopic, UseFindTopic } from "@/types/types";
import { objTopic } from "@/utils/topic";
import { useEffect, useState } from "react";
import { getTopic } from "@/libs/requests";

export const useFindTopic = (title: string): UseFindTopic => {
  const [currentTopic, setCurrentTopic] = useState<ObjTopic>(objTopic);

  useEffect(() => {
    if (title) {
      const getCurrentTopic = async () => {
        const topic = await getTopic(title);
        if (topic) setCurrentTopic(topic[0]);
      };
      getCurrentTopic();
    }
  }, [title]);

  return { currentTopic };
};
