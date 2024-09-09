function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px 0",
      }}
    >
      <span className="loader"></span>
    </div>
  );
}

export default Spinner;
