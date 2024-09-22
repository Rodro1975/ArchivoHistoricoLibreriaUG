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
        <title>Inicio de Sesión - Archivo Histórico Librería UG</title>
      </Head>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/escudo-png.png"
              alt="Logotipo Universidad de Guanajuato"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-2xl font-semibold text-center mb-4">
            Iniciar Sesión
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Ingrese su email"
                className="w-full py-2 px-4 border rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Ingrese su contraseña"
                className="w-full py-2 px-4 border rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 transition duration-200"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
