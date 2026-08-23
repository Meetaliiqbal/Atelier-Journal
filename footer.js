document.addEventListener("DOMContentLoaded", function () {

  const footerStyle = document.createElement("style");

  footerStyle.textContent = `
    /* =========================================
       FOOTER
    ========================================= */

    .site-footer {
      background: #181917;
      color: #ffffff;

      padding: 80px 0 25px;
    }

    .site-footer-inner {
      width: min(1200px, 90%);
      margin: 0 auto;
    }


    /* =========================================
       FOOTER TOP
    ========================================= */

    .footer-top {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 0.8fr;

      gap: 70px;

      padding-bottom: 70px;
    }


    /* =========================================
       FOOTER BRAND
    ========================================= */

    .footer-brand {
      max-width: 400px;
    }

    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 11px;

      color: #ffffff;
      text-decoration: none;
    }

    .footer-logo-mark {
      width: 32px;
      height: 32px;

      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: "Playfair Display", Georgia, serif;
      font-size: 15px;
    }

    .footer-logo-name {
      font-family: "Playfair Display", Georgia, serif;
      font-size: 22px;
      font-weight: 500;
    }

    .footer-description {
      max-width: 350px;

      margin-top: 24px;

      color: rgba(255, 255, 255, 0.58);

      font-family: "Manrope", sans-serif;
      font-size: 12px;
      line-height: 1.8;
    }


    /* =========================================
       FOOTER LINKS
    ========================================= */

    .footer-column-title {
      margin-bottom: 20px;

      color: rgba(255, 255, 255, 0.4);

      font-family: "Manrope", sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      width: fit-content;

      color: rgba(255, 255, 255, 0.78);

      font-family: "Manrope", sans-serif;
      font-size: 11px;
      text-decoration: none;

      transition: color 0.2s ease;
    }

    .footer-links a:hover {
      color: #ffffff;
    }


    /* =========================================
       FOOTER BOTTOM
    ========================================= */

    .footer-bottom {
      padding-top: 22px;

      border-top: 1px solid rgba(255, 255, 255, 0.13);

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 30px;
    }

    .footer-copy {
      color: rgba(255, 255, 255, 0.4);

      font-family: "Manrope", sans-serif;
      font-size: 9px;
      letter-spacing: 0.03em;
    }

    .footer-legal {
      display: flex;
      align-items: center;
      gap: 22px;
    }

    .footer-legal a {
      color: rgba(255, 255, 255, 0.45);

      font-family: "Manrope", sans-serif;
      font-size: 9px;

      text-decoration: none;

      transition: color 0.2s ease;
    }

    .footer-legal a:hover {
      color: #ffffff;
    }


    /* =========================================
       MOBILE
    ========================================= */

    @media (max-width: 760px) {

      .site-footer {
        padding: 65px 0 22px;
      }

      .footer-top {
        grid-template-columns: 1fr 1fr;
        gap: 45px 30px;

        padding-bottom: 50px;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }

      .footer-description {
        max-width: 100%;
      }

      .footer-bottom {
        align-items: flex-start;
        flex-direction: column;
        gap: 18px;
      }

      .footer-legal {
        gap: 18px;
        flex-wrap: wrap;
      }
    }


    @media (max-width: 480px) {

      .footer-top {
        grid-template-columns: 1fr;
      }

      .footer-brand {
        grid-column: auto;
      }

    }
  `;

  document.head.appendChild(footerStyle);


  /* =========================================
     FOOTER HTML
  ========================================= */

  const footer = document.createElement("footer");

  footer.className = "site-footer";

  footer.innerHTML = `
    <div class="site-footer-inner">

      <div class="footer-top">


        <!-- BRAND -->

        <div class="footer-brand">

          <a href="index.html" class="footer-logo">

            <span class="footer-logo-mark">
              A
            </span>

            <span class="footer-logo-name">
              Atelier Journal
            </span>

          </a>

          <p class="footer-description">
            A curated journal exploring food, fashion,
            travel, nature, decor and quotes through
            a modern everyday lens.
          </p>

        </div>


        <!-- EXPLORE -->

        <div class="footer-column">

          <div class="footer-column-title">
            Explore
          </div>

          <div class="footer-links">

            <a href="food.html">
              Food
            </a>

            <a href="fashion.html">
              Fashion
            </a>

            <a href="travel.html">
              Travel
            </a>

            <a href="nature.html">
              Nature
            </a>

            <a href="decor.html">
              Decor
            </a>

            <a href="quotes.html">
              Quotes
            </a>

          </div>

        </div>


        <!-- JOURNAL -->

        <div class="footer-column">

          <div class="footer-column-title">
            Journal
          </div>

          <div class="footer-links">

            <a href="index.html">
              Home
            </a>

            <a href="about.html">
              About
            </a>

          </div>

        </div>

      </div>


      <!-- BOTTOM -->

      <div class="footer-bottom">

        <div class="footer-copy">
          © 2026 Atelier Journal. All rights reserved.
        </div>

        <div class="footer-legal">

          <a href="terms.html">
            Terms
          </a>

          <a href="privacy.html">
            Privacy
          </a>

          <a href="disclaimer.html">
            Disclaimer
          </a>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(footer);

});