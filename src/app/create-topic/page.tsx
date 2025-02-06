"use client";
import { useTopics } from "@/hooks/useTopics";
import "@/styles/create-topic.css";
import { ObjTopic } from "@/types/types";
import { objTopic } from "@/utils/topic";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateTopic() {
  const [formTopic, setFormTopic] = useState<ObjTopic>(objTopic);
  const { addNewTopic } = useTopics();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormTopic({ ...formTopic, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTopic(formTopic);
    setFormTopic(objTopic);
  };

  return (
    <section className="page-create-topic">
      <form onSubmit={handleSubmit} className="form-create-topic">
        <h1 className="title-form-create">Agrega tu tema de debate</h1>
        <input
          type="text"
          name="name"
          value={formTopic.name}
          onChange={handleChange}
          placeholder="Título de tu tema"
          className="input-form-create"
        />
        <input
          type="text"
          name="details"
          value={formTopic.details}
          onChange={handleChange}
          placeholder="Agrega una breve descripción"
          className="input-form-create"
        />
        <button type="submit" className="button-form-create">
          Agregar
        </button>
      </form>
    </section>
  );
}
