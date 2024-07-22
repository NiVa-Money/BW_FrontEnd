// utils/auth.js
export const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token");
    }
    return false;
  };
  