const Congratulations = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>200</h1>
      <h2 style={{ fontSize: "2rem", marginTop: "1rem" }}>Congratulations</h2>
      <a href="/user/dashboard" style={{ color: "green", fontSize: "20px" }}>
        Home
      </a>
    </div>
  );
};
export default Congratulations;
// congratulations
