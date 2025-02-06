"use client";
import { useContextUser } from "@/context/ContextUser";
import { FormEvent, useState } from "react";
import "@/styles/register.css"; 
import { useRouter } from "next/navigation";

export default function Register() {
  const [user, setUser] = useState<string>("");
  const { login } = useContextUser();
  const router = useRouter(); 
  const submitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user);
    setUser("");
    router.push("/")
  };

  return (
    <section className="page-register">
      <h1 className="title-register">Crea un nombre de usuario</h1>
      <form className="form-register" onSubmit={submitRegister}>
        <input
          type="text"
          placeholder="Usuario"
          className="input-register"
          name="user"
          value={user}
          required
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit" className="button-register">
          Crear
        </button>
      </form>
    </section>
  );
}
