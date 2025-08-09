import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Landing = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to GameLife 🎮
        </h1>
        <div className="mb-4">
          <GoogleLoginButton />
        </div>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        {/* Guest Login */}
        <button
          onClick={handleGuestLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Landing;
