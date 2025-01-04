<<<<<<< HEAD
// config/db.js
import { createClient } from "@supabase/supabase-js";

// Variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Log para depuración (solo en desarrollo)
if (process.env.NODE_ENV === "development") {
  console.log("Supabase URL:", supabaseUrl);
  console.log(
    "Supabase Key:",
    supabaseKey ? "**** (oculta)" : "No configurada"
  );
}

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
=======
import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_archivoHistorico",
});

// Exportamos el pool directamente
export default pool;
>>>>>>> d21be07ebf79133e92be10fd060a7e0bbe53bc11
