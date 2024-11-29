<<<<<<< HEAD
// pages/_app.js
import { useEffect, useState } from "react";
import supabase from "../supabase"; // Ajusta la ruta según tu estructura de archivos
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Obtener la sesión al cargar la aplicación
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    // Suscribirse a cambios de autenticación
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Cambio de autenticación:", event, session); // Depuración
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Redirigir si el usuario no está autenticado en rutas protegidas
  useEffect(() => {
    const protectedRoutes = ["/dashboard", "/catalog", "/completeCatalog"];
    if (!user && protectedRoutes.includes(router.pathname)) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <Component {...pageProps} user={user} />;
}
=======
import "animate.css/animate.min.css";
import "../styles/globals.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css"; // Asegúrate de que esta línea esté presente
import { NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Novecento+Wide&family=Raleway:wght@400&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
>>>>>>> d21be07ebf79133e92be10fd060a7e0bbe53bc11
