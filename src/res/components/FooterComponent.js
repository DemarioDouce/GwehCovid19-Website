function FooterComponent() {
  // Store current year
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="footer-section text-center">
        <footer>
          <p>Copyright© {currentYear} Demario Douce. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
}

export default FooterComponent;
