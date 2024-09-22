import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "/components/NavBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Página Principal - Archivo Histórico Librería UG</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guanajuato.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-35"></div>

        {/* Escudo de la Universidad */}
        <Image
          src="/images/escudo-png.png"
          alt="Escudo UG"
          width={128} // Requerido por Next.js
          height={128} // Requerido por Next.js
          className="mx-auto w-32 h-32 mb-6" // Tailwind CSS para ajuste visual
        />

        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-gold text-4xl font-bold">
            Bienvenido al Archivo Histórico de la Librería UG
          </h1>
          <p className="text-gold mt-4">
            Explora nuestra colección y aprende más sobre la historia de la
            universidad.
          </p>
          <Link
            href="/login"
            className="bg-yellow-500 text-black py-2 px-12 rounded inline-block font-bold hover:bg-yellow-400 transition duration-300 mt-10"
          >
            Inicia Sesión
          </Link>
        </div>
      </section>

      {/* Barra de navegacion */}
      <NavBar />

      {/* Barra de información */}
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-800 px-6 py-4 sm:px-3.5">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#003c71] to-[#e3d8b0] opacity-40"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          ></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-white">
            <strong className="font-medium text-yellow-500">ABEJA</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            ¡Únete al Archivo Histórico de la UG y descubre un fascinante viaje
            a través del tiempo!
          </p>
          <a
            href="/register"
            className="flex-none rounded inline-block bg-gray-900 px-3.5 py-1 text-sm font-medium text-gold shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Registrate ahora <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586 15.293 3.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707A1 1 0 1 1 4.707 3.293L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Fin del Contenido */}
    </>
  );
}
