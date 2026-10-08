document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     FAVICON
  ========================================= */

  const favicon = document.createElement("link");

  favicon.rel = "icon";
  favicon.type = "image/svg+xml";

  favicon.href =
    "data:image/svg+xml," +
    encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <rect
          width="64"
          height="64"
          rx="32"
          fill="#181917"
        />

        <text
          x="32"
          y="43"
          text-anchor="middle"
          font-family="Georgia, serif"
          font-size="34"
          fill="#faf9f6"
        >
          A
        </text>
      </svg>
    `);

  document.head.appendChild(favicon);


  /* =========================================
     HEADER CSS
  ========================================= */

  const headerStyle = document.createElement("style");

  headerStyle.textContent = `

    /* =========================================
       HEADER
    ========================================= */

    .site-header {
      width: 100%;

      position: relative;
      z-index: 9999;

      background: #faf9f6;

      border-bottom: 1px solid #deddd8;
    }


    .site-header-inner {
      width: min(1200px, 90%);
      min-height: 82px;

      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 40px;
    }


    /* =========================================
       LOGO
    ========================================= */

    .site-logo {
      display: inline-flex;
      align-items: center;

      gap: 11px;

      color: #181917;

      text-decoration: none;

      white-space: nowrap;
    }


    .site-logo-mark {
      width: 32px;
      height: 32px;

      flex-shrink: 0;

      border: 1px solid #181917;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: "Playfair Display", Georgia, serif;

      font-size: 15px;
      font-weight: 500;

      line-height: 1;

      transition:
        background 0.25s ease,
        color 0.25s ease;
    }


    .site-logo-name {
      font-family: "Playfair Display", Georgia, serif;

      font-size: 21px;
      font-weight: 500;

      line-height: 1;

      letter-spacing: -0.025em;
    }


    .site-logo:hover .site-logo-mark {
      background: #181917;
      color: #faf9f6;
    }


    /* =========================================
       NAVIGATION
    ========================================= */

    .site-nav {
      display: flex;
      align-items: center;

      gap: 30px;
    }


    .site-nav a {
      position: relative;

      color: #5d5e59;

      text-decoration: none;

      font-family: "Manrope", sans-serif;

      font-size: 10px;
      font-weight: 700;

      letter-spacing: 0.11em;

      text-transform: uppercase;

      transition: color 0.2s ease;
    }


    .site-nav a::after {
      content: "";

      position: absolute;

      left: 0;
      bottom: -8px;

      width: 0;
      height: 1px;

      background: #181917;

      transition: width 0.25s ease;
    }


    .site-nav a:hover {
      color: #181917;
    }


    .site-nav a:hover::after {
      width: 100%;
    }


    /* =========================================
       MOBILE MENU BUTTON
    ========================================= */

    .menu-toggle {
      width: 40px;
      height: 40px;

      padding: 0;

      display: none;

      align-items: center;
      justify-content: center;

      background: transparent;

      border: 1px solid #deddd8;

      cursor: pointer;

      appearance: none;
    }


    .menu-icon {
      width: 17px;
      height: 12px;

      display: flex;
      flex-direction: column;

      justify-content: space-between;
    }


    .menu-icon span {
      display: block;

      width: 100%;
      height: 1px;

      background: #181917;

      transition:
        transform 0.25s ease,
        opacity 0.25s ease;
    }


    /* =========================================
       MOBILE MENU ACTIVE
    ========================================= */

    .menu-toggle.active .menu-icon span:first-child {
      transform: translateY(5.5px) rotate(45deg);
    }


    .menu-toggle.active .menu-icon span:last-child {
      transform: translateY(-5.5px) rotate(-45deg);
    }


    /* =========================================
       TABLET
    ========================================= */

    @media (max-width: 900px) {

      .site-header-inner {
        gap: 25px;
      }

      .site-nav {
        gap: 20px;
      }

      .site-nav a {
        font-size: 9px;
      }

    }


    /* =========================================
       MOBILE
    ========================================= */

    @media (max-width: 760px) {

      .site-header-inner {
        width: 90%;

        min-height: 72px;
      }


      .site-logo-mark {
        width: 30px;
        height: 30px;

        font-size: 14px;
      }


      .site-logo-name {
        font-size: 19px;
      }


      /* Mobile button */

      .menu-toggle {
        display: flex;
      }


      /* Mobile navigation */

      .site-nav {
        position: absolute;

        top: 72px;
        left: 0;
        right: 0;

        width: 100%;

        padding: 12px 5% 22px;

        background: #faf9f6;

        border-bottom: 1px solid #deddd8;

        display: none;

        flex-direction: column;
        align-items: stretch;

        gap: 0;
      }


      .site-nav.open {
        display: flex;
      }


      .site-nav a {
        width: 100%;

        padding: 16px 0;

        border-bottom: 1px solid #deddd8;

        color: #181917;

        font-size: 10px;

        letter-spacing: 0.13em;
      }


      .site-nav a:last-child {
        border-bottom: none;
      }


      .site-nav a::after {
        display: none;
      }

    }


    /* =========================================
       SMALL MOBILE
    ========================================= */

    @media (max-width: 420px) {

      .site-header-inner {
        width: 92%;
      }


      .site-logo-name {
        font-size: 18px;
      }


      .site-logo-mark {
        width: 29px;
        height: 29px;
      }


      .menu-toggle {
        width: 38px;
        height: 38px;
      }

    }

  `;

  document.head.appendChild(headerStyle);


  /* =========================================
     HEADER HTML
  ========================================= */

  const header = document.createElement("header");

  header.className = "site-header";

  header.innerHTML = `

    <div class="site-header-inner">


      <!-- LOGO -->

      <a
        href="index.html"
        class="site-logo"
        aria-label="Atelier Journal Home"
      >

        <span class="site-logo-mark">
          A
        </span>

        <span class="site-logo-name">
          Atelier Journal
        </span>

      </a>


      <!-- NAVIGATION -->

      <nav
        class="site-nav"
        id="siteNavigation"
        aria-label="Main navigation"
      >

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

      </nav>


      <!-- MOBILE MENU -->

      <button
        class="menu-toggle"
        id="menuToggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded="false"
        aria-controls="siteNavigation"
      >

        <span class="menu-icon">

          <span></span>
          <span></span>

        </span>

      </button>


    </div>

  `;


  /* =========================================
     INSERT HEADER
  ========================================= */

  document.body.prepend(header);


  /* =========================================
     MOBILE MENU FUNCTIONALITY
  ========================================= */

  const menuToggle = document.getElementById("menuToggle");

  const navigation = document.getElementById("siteNavigation");


  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen =
        navigation.classList.toggle("open");


      menuToggle.classList.toggle(
        "active",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    });


    /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================= */

    navigation
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener("click", function () {

          navigation.classList.remove("open");

          menuToggle.classList.remove("active");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
          );

        });

      });


    /* =========================================
       CLOSE MENU WHEN RESIZING TO DESKTOP
    ========================================= */

    window.addEventListener("resize", function () {

      if (window.innerWidth > 760) {

        navigation.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      }

    });

  }


  /* =========================================
     ADSTERRA SOCIAL BAR
  ========================================= */

  if (!document.querySelector(
    'script[data-adsterra-social-bar]'
  )) {

    const adsterraSocialBar =
      document.createElement("script");

    adsterraSocialBar.src =
      "https://pl31719591.profitableratecpmnetwork.com/b1/24/cf/b124cf62f308f572447c0bc5c5f04457.js";

    adsterraSocialBar.setAttribute(
      "data-adsterra-social-bar",
      "true"
    );

    document.body.appendChild(
      adsterraSocialBar
    );

  }

});