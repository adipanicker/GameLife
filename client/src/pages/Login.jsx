import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to GameLife 🎮
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Sign in to track your tasks, earn points, and climb the leaderboard!
        </p>

        {/* Google Sign-In Button */}
        <div className="mb-7">
          <GoogleLoginButton />
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Guest Option */}
        <div className="text-center">
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Continue as Guest (Limited Features)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
