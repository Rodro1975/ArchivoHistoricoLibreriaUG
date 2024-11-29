export default function LoginLayout({ children }) {
  return (
    <div className="login-layout">
      <header>Inicia Sesión en Nuestro Sistema</header>
      <main>{children}</main>
      <footer>Todos los derechos reservados 2024</footer>
    </div>
  );
}
