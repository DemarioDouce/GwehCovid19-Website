function CardComponent({ title, text, color }) {
  return (
    <>
      <div
        className="card shadow-sm rounded"
        style={{
          width: "90%",
          color: "#ffffff",
          backgroundColor: color,
          border: "2px solid #ffffff",
        }}
      >
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
