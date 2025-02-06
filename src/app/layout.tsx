import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import ContextProvider from "@/context/ContextUser";

export const metadata: Metadata = {
  title: "Lista de temas reelevantes",
  description:
    "Puedes crear temas que sean de tu interés, añadiendo opiniones de otros usuarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
