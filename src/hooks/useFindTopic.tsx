"use client";
import { ObjTopic, UseFindTopic } from "@/types/types";
import { objTopic } from "@/utils/topic";
import { useEffect, useState } from "react";
import { getTopic } from "@/libs/requests";

export const useFindTopic = (title: string): UseFindTopic => {
  const [currentTopic, setCurrentTopic] = useState<ObjTopic>(objTopic);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (title) {
      const getCurrentTopic = async () => {
        try {
          const topic = await getTopic(title);
          if (topic) setCurrentTopic(topic[0]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      getCurrentTopic();
    }
  }, [title]);

  return { currentTopic, loading };
};
