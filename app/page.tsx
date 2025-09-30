export default function LandingPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="GradeAIQ – AI essay grading that saves teachers hours. Upload scanned or typed essays, use your rubric, and get transparent, editable feedback instantly."
        />
        <title>GradeAIQ – Save Time. Keep Control.</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --primary: #2d70f2;
            --primary-hover: #1c54c8;
            --text-dark: #222;
            --text-light: #666;
            --bg-light: #f9fafc;
            --bg-highlight: #fff8ec;
            --bg-muted: #f4f6fa;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
          }
          body {
            background: #fff;
            color: var(--text-dark);
            line-height: 1.6;
          }
          header, section, footer {
            padding: 4rem 2rem;
            max-width: 1400px;
            margin: auto;
          }
          h1, h2, h3 { margin-bottom: 1rem; text-align: center; }
          p { margin-bottom: 1rem; text-align: center; }

          /* Hero */
          .hero {
            text-align: center;
            padding: 4rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          }
          .hero h1 {
            font-size: 3rem;
            max-width: 900px;
            margin: auto;
          }
          .hero p {
            font-size: 1.4rem;
            max-width: 700px;
            margin: 1rem auto;
          }

          /* Buttons */
          .cta-button {
            background: var(--primary);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-top: 1rem;
          }
          .cta-button:hover { background: var(--primary-hover); }
          .cta-outline {
            display: inline-block;
            margin-top: 1rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            color: var(--primary);
            border: 2px solid var(--primary);
            border-radius: 5px;
            background: transparent;
            text-decoration: none;
            transition: background 0.3s ease, color 0.3s ease;
          }
          .cta-outline:hover { background: var(--primary); color: white; }

          .full-width-image img {
            display: block;
            width: 100%;
            border-radius: 8px;
            margin: 2rem 0;
          }

          footer {
            text-align: center;
            font-size: 0.9rem;
            padding: 2rem;
            color: var(--text-light);
          }
          footer .footer-links a {
            color: var(--primary);
            margin: 0 0.5rem;
            text-decoration: none;
          }
          footer .footer-links a:hover {
            text-decoration: underline;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .hero p { font-size: 1.1rem; }
          }
        `}</style>
      </head>
      <body>
        {/* Navbar */}
        <nav className="main-nav">
          <div className="nav-logo desktop-only">
            <img src="/grade-aiq-logo.png" alt="GradeAIQ Logo" />
          </div>
          <ul className="nav-links desktop-only">
            <li><a href="#how-it-works">Approach</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="/login" className="nav-cta desktop-only">Login</a>
          <div className="hamburger mobile-only" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero">
          <h1>Regain Your Evenings. Grade Smarter with GradeAIQ.</h1>
          <p>
            Upload essays, apply your rubric, and get AI-powered feedback you
            control — in minutes, not hours.
          </p>
          <a className="cta-button" href="/login">Try GradeAIQ Free</a>
          <a className="cta-outline" href="#how-it-works">How It Works</a>
        </header>

        {/* Showcase Image */}
        <section className="full-width-image">
          <img src="/Grade AIQ Dashboard.png" alt="Grade AIQ Dashboard" />
        </section>

        {/* Features */}
        <section>
          <h2>Why Teachers Love GradeAIQ</h2>
          <p>GradeAIQ saves you hours without losing control over your rubric.</p>
          <div style={{display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap"}}>
            <div style={{flex: "1 1 300px", textAlign: "center"}}>
              <img src="/Grade AIQ Feedback.png" alt="Feedback" style={{width: "100%", borderRadius: "8px"}} />
              <h3>Instant AI Feedback</h3>
              <p>Upload an essay and see immediate, rubric-based suggestions.</p>
            </div>
            <div style={{flex: "1 1 300px", textAlign: "center"}}>
              <img src="/Grade AIQ Report.png" alt="Reports" style={{width: "100%", borderRadius: "8px"}} />
              <h3>Transparent Reports</h3>
              <p>See where points were given, and adjust as needed.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Auxin Ventures. All rights reserved.</p>
          <p className="footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> |
            <a href="#">Impressum</a>
          </p>
        </footer>

        {/* JS for menu */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", () => {
              const hamburger = document.getElementById("hamburger");
              const mobileMenu = document.getElementById("mobileFullscreenMenu");
              const closeButton = document.getElementById("closeMenuButton");
              if (hamburger && mobileMenu && closeButton) {
                hamburger.addEventListener("click", () => {
                  mobileMenu.classList.toggle("open");
                });
                closeButton.addEventListener("click", () => {
                  mobileMenu.classList.remove("open");
                });
                document.querySelectorAll(".mobile-fullscreen-menu a").forEach(link => {
                  link.addEventListener("click", () => {
                    mobileMenu.classList.remove("open");
                  });
                });
              }
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
