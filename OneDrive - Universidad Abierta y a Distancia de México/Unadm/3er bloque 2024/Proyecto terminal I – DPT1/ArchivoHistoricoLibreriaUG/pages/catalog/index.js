import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import NavBar from "/components/NavBar";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Catálogo - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />
      <div className="login-container">
        <div className="escudo">
          <Image
            src="/images/escudo-png.png" // Reemplaza con el nombre de tu archivo
            alt="Logotipo Universidad de Guanajuato"
            width={120} // Asegúrate de usar el mismo tamaño que en CSS
            height={120} // Mantén las proporciones correctas //aqui va el codigo de la pagina
          />
        </div>
      </div>
    </>
  );
}
