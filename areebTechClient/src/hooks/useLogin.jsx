import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const userData = await res.json();

      if (!res.ok) {
        throw new Error(userData.message || "Something wen wrong");
      }
      setIsLoading(false);
      return userData;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      return null;
    }
  };
  return { login, error, loading };
};

export default useLogin;
