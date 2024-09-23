// /pages/dashboard/index.js
import Sidebar from "/components/Sidebar";
import Header from "/components/Header";
import { useAuth } from "../../hooks/useAuth";
import AdminPanel from "../../components/AdminPanel"; // Importa AdminPanel
import EditorPanel from "../../components/EditorPanel"; // Importa EditorPanel
import ResearcherPanel from "../../components/ResearcherPanel"; // Importa ResearcherPanel

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          {user.role === "admin" && <AdminPanel />}
          {user.role === "editor" && <EditorPanel />}
          {user.role === "researcher" && <ResearcherPanel />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
