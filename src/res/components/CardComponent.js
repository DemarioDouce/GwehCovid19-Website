function CardComponent({ title, text, color }) {
  return (
    <>
      <div
        class="card shadow-sm rounded"
        style={{ width: "90%", color: "#ffffff", backgroundColor: color }}
      >
        <div class="card-body">
          <h3 class="card-title">{title}</h3>
          <p class="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
