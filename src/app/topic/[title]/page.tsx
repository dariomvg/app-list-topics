"use client";
import { CardComment } from "@/components/CardComment";
import { CreateComment } from "@/components/CreateComment";
import { useFindTopic } from "@/hooks/useFindTopic";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useTopics } from "@/hooks/useTopics";
import { useContextUser } from "@/context/ContextUser";
import Loading from "@/components/Loading";
import "@/styles/page-topic.css";

export default function PageTopic() {
  const params = useParams<{ title: string }>();
  if (!params) return null;

  const { currentTopic, loading } = useFindTopic(params.title);
  const { removeComment } = useTopics();
  const { username } = useContextUser();
  const [index, setIndex] = useState<number>(5);

  return (
    <section className="page-topic">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container-details-topic">
            <h1 className="title-topic">{currentTopic.title}</h1>
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
            {currentTopic.comments.length > 0 &&
              currentTopic.comments
                .slice(0, index)
                .map((comment) => (
                  <CardComment
                    key={comment.id}
                    comment={comment}
                    removeComment={removeComment}
                    currentUser={username}
                    idTopic={currentTopic.id}
                  />
                ))}

            <button
              className="button-comments"
              onClick={() => setIndex(index + 3)}>
              Cargar más comentarios
            </button>
          </ul>

          <div className="container-form-comments">
            <CreateComment idTopic={currentTopic.id} />
          </div>
        </>
      )}
    </section>
  );
}
