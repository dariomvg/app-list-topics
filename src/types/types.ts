import { ReactNode } from "react";

export type ObjComment = {
  id: number;
  user: string;
  comment: string;
  date: string;
};

export type ObjTopic = {
  id: number;
  title: string;
  details: string;
  link: string;
  comments: ObjComment[];
  range: number;
  creator: string; 
};

export interface UseTopics {
  topics: ObjTopic[];
  addNewTopic: (topic: ObjTopic) => void;
  searchTopic: (name: string) => void;
  topic: ObjTopic;
  resetSearch: () => void;
  addNewComment: (comment: string, idTopic: number) => void;
  removeComment: (idComment: number, idTopic: number) => void;
  loading: boolean; 

}

export interface UseFindTopic {
  currentTopic: ObjTopic;
  loading: boolean; 
}

export interface ContextProviderChildren {
  children: ReactNode;
}

export interface ContextUserTypes {
  username: string;
  login: (name: string) => void;
  logout: () => void;
}
