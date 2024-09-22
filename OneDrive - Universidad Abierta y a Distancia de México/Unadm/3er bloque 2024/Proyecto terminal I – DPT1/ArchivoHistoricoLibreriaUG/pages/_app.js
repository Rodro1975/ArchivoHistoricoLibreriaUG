import "../styles/globals.css";
import "animate.css/animate.min.css";

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
