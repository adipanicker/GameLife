const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="font-medium">Sign in with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
