function CardComponent({ title, text, color }) {
  return (
    <>
      <div
        class="card shadow-sm rounded"
        style={{ width: "90%", color: "#ffffff", backgroundColor: color }}
      >
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p class="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
