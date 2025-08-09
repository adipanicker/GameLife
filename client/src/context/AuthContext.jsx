import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data after login
    const fetchUser = async () => {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        credentials: "include",
      });
      const data = await res.json();
      if (data.user) setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
