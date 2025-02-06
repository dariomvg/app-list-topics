"use client"
import Link from "next/link";
import "@/styles/header.css";
import { useContextUser } from "@/context/ContextUser";

export const Header = () => {
  const  {username, logout} = useContextUser(); 

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="link-nav">
          Temas
        </Link>
        <Link href="/create-topic" className="link-nav">
          Crear tema
        </Link>
        {username ? (
          <button className="link link-logout" onClick={logout}>Cerrar sesión</button>
        ) : (
          <Link href="/register" className="link link-register">
            Registrarse
          </Link>
        )}
      </nav>
    </header>
  );
};
