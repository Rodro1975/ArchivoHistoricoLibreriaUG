import bcrypt from "bcrypt";
import db from "../../config/db"; // Asegúrate de que db es el pool

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Datos recibidos:", req.body);
    const {
      primerNombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      correo,
      telefono,
      password, // Asegúrate de que la contraseña se envíe desde el frontend
      rol,
      justificacion,
    } = req.body;

    try {
      // Verificar si el usuario ya existe
      const sqlCheckUser = `SELECT * FROM usuarios WHERE correo = ?`;
      const [existingUser] = await db.query(sqlCheckUser, [correo]);

      if (existingUser.length > 0) {
        return res
          .status(400)
          .json({ message: "El usuario ya está registrado" });
      }

      // Cifrar la contraseña
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Guardar el nuevo usuario en la base de datos
      const sqlInsertUser = `
        INSERT INTO usuarios 
        (primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, correo, telefono, password, fecha_creacion, fecha_modificacion, rol, justificacion)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?, ?)
      `;

      await db.query(sqlInsertUser, [
        primerNombre,
        segundoNombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        telefono,
        hashedPassword,
        rol,
        justificacion,
      ]);

      res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      res.status(500).json({ message: "Error en el servidor", error });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
