import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <img
        className="navbar-logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/024/212/245/small/ai-generated-sticker-anime-girl-purple-hair-png.png"
        alt="logo"
      />
      <ul className="footer-list">
        <h4>About Us</h4>
        <li onClick={() => navigate("/about")}>Introduction</li>
        <li>Get in touch</li>
      </ul>
      <ul className="footer-list">
        <h4>Contact</h4>
        <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-phone"></i>
          <span>19002404</span>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-envelope"></i>
          <span>tuan.pham.super@gmail.com</span>
        </p>
        <span>Follow us on:</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="https://www.facebook.com/kamiyama.touma.902"
            style={{ color: "#fff" }}
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com/kyunnxneon.u/"
            style={{ color: "#fff" }}
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </a>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
