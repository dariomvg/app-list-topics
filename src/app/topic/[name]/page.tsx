"use client";
import { CardComment } from "@/components/CardComment";
import { CreateComment } from "@/components/CreateComment";
import { useFindTopic } from "@/hooks/useFindTopic";
import { useState } from "react";
import "@/styles/page-topic.css";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import { useTopics } from "@/hooks/useTopics";
import { useContextUser } from "@/context/ContextUser";

export default function PageTopic() {
  const { name } = useParams<{ name: string }>();

  const { currentTopic } = useFindTopic(name);
  const {removeComment} = useTopics(); 
  const {username} = useContextUser()
  const [index, setIndex] = useState<number>(10);

  return (
    <section className="page-topic">
      {currentTopic ? (
        <>
          <div className="container-details-topic">
            <h1 className="title-topic">{currentTopic.name}</h1>
            <p className="details-topic">{currentTopic.details}</p>
            <p className="creator-topic">
              <b>Creador por: </b> {currentTopic.creator}
            </p>
            <p className="position-topic">
              Numero <b>{currentTopic.range}</b> hoy
            </p>
            <p className="count-comments-topic">
              <b>{currentTopic.comments.length}</b> Comentarios
            </p>
          </div>

          <ul className="container-list-comments">
            {currentTopic.comments.slice(0, index).map((comment) => (
              <CardComment key={comment.id} comment={comment} removeComment={removeComment} currentUser={username} />
            ))}

            <button
              className="button-comments"
              onClick={() => setIndex(index + 10)}>
              Cargar más comentarios
            </button>
          </ul>

          <div className="container-form-comments">
            <CreateComment idTopic={currentTopic.id} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}
