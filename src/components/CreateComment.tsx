"use client";
import "@/styles/create-comment.css";
import { ChangeEvent, FormEvent, useState } from "react";
import iconSend from "@/assets/icon-send.svg";
import { useTopics } from "@/hooks/useTopics";

export const CreateComment = ({idTopic}: {idTopic: number}) => {
  const count = 150;
  const [comment, setComment] = useState<string>("");
  const [countCaracters, setCountCaracters] = useState<number>(count);
  const {addNewComment} = useTopics(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setComment(newValue);
    setCountCaracters(count - newValue.length);
  };

  const submitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewComment(comment, idTopic); 
    setComment("");
    setCountCaracters(count);
  };

  return (
    <form className="form-comments" onSubmit={submitCreate}>
      <strong className="count-caracters">{countCaracters}</strong>
      <input
        type="text"
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
        maxLength={150}
        required
        className="input-form-comments"
        placeholder="Agrega tu comentario aquí..."
      />
      <button type="submit" className="button-form-comments">
        <img
          src={iconSend.src}
          alt="icon send"
          width={30}
          height={30}
          className="icon-send"
          title="Enviar"
        />
      </button>
    </form>
  );
};
