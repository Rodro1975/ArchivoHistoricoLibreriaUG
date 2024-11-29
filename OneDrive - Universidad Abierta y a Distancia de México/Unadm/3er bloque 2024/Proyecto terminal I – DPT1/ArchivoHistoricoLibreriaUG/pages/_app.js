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
