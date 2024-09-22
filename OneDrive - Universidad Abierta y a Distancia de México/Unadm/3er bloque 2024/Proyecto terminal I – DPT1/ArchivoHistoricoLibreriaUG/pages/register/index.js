import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import NavBar from "/components/NavBar";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data); // Aquí haces la llamada a tu API para registrar el usuario
  };

  return (
    <>
      <Head>
        <title>Registro - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registro</h1>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
