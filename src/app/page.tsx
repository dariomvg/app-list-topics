"use client";
import { CardTopic } from "@/components/CardTopic";
import { FormSearch } from "@/components/FormSearch";
import { useTopics } from "@/hooks/useTopics";
import { useState } from "react";
import "./main.css";

export default function Home() {
  const { topics, searchTopic, topic, resetSearch } = useTopics();
  const [index, setIndex] = useState<number>(10);

  return (
    <main className="main">
      <div className="container-title-form">
        <h1 className="title-main">Temas más reelevantes de ahora</h1>
        <FormSearch
          searchTopic={searchTopic}
          topic={topic}
          resetSearch={resetSearch}
        />
      </div>
      <section className="section-topics">
        <ul className="list-topics">
          {topic.title ? (
            <CardTopic topic={topic} />
          ) : (
            topics.length > 0 &&
            topics
              .slice(0, index)
              .map((topic) => <CardTopic key={topic.id} topic={topic} />)
          )}
          <button
            className="button-topics"
            onClick={() => setIndex(index + 10)}>
            Cargar más temas
          </button>
        </ul>
      </section>
    </main>
  );
}
