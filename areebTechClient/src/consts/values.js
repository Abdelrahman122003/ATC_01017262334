const PORT = 3000;
export const serverDomain = `http://localhost:${PORT}`;
const header = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const getHeaderAuth = (userRole) => {
  header.headers["token"] = localStorage.getItem("token");
  header.headers["role"] = userRole;
  return header;
};

export const getHeader = () => {
  return header;
};
