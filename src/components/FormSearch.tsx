"use client";
import iconSearch from "@/assets/icon-search.svg";
import iconReset from "@/assets/icon-reset.svg";
import { FormEvent, useState } from "react";
import { ObjTopic } from "@/types/types";
import "@/styles/form-search.css";

export const FormSearch = ({
  searchTopic,
  topic,
  resetSearch,
}: {
  searchTopic: (name: string) => void;
  topic: ObjTopic;
  resetSearch: () => void;
}) => {
  const [form, setForm] = useState<string>("");

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTopic(form);
    setForm("");
  };

  return (
    <form className="form-search" onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Títulos de temas..."
        name="form"
        value={form}
        onChange={(e) => setForm(e.target.value)}
        required
        className="input-search"
      />
      <button type="submit" className="button-search">
        <img src={iconSearch.src} alt="icon search" width={20} height={20} />
      </button>
      {topic.name && (
        <button onClick={resetSearch} className="button-search">
          <img src={iconReset.src} alt="icon reset" width={20} height={20} />
        </button>
      )}
    </form>
  );
};
