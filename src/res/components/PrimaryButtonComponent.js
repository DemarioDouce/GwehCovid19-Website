function PrimaryButtonComponent({ text }) {
  return (
    <>
      <button type="button" className="btn-primary rounded mb-3">
        {text}
      </button>
    </>
  );
}

export default PrimaryButtonComponent;
