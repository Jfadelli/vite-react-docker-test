import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-600">
      <div className="w-full max-w-screen-md text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

function LoginModalWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-gray-600 p-8 rounded-md shadow-lg w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl bg-gray-900"
        >
          ×
        </button>
        <Login />
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isLoginModal = location.pathname === "/login";

  return (
    <div className="w-screen min-h-screen bg-gray-700 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
      {isLoginModal && <LoginModalWrapper />}
    </div>
  );
}
