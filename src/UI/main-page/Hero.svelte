<script>
  import { fly } from "svelte/transition";
</script>

<div class="hero" in:fly={{ y: 200, duration: 1000 }}>
  <div class="hero-center" in:fly={{ y: 50, delay: 600, duration: 500 }}>
    <div>
      <img
        class="hero-logo"
        src="./img/logo_scaled.webp"
        alt="Autobunker logo"
      />
      <span class="hero-slogan">LAAJA HUOLTO</span>
    </div>
  </div>
  <a
    href="#services"
    class="hero-services-cta"
    in:fly={{ y: 50, delay: 700, duration: 500 }}
    >PALVELUT
    <div class="hero-down-arrow" />
  </a>
</div>

<style>
  .hero {
    height: 90vh;
    background-image: url(../img/hero.webp);
    background-size: cover;
    background-position: center;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    z-index: 0;
    filter: drop-shadow(rgba(230, 137, 43, 0.4) 0 0 1rem);
    border-radius: 0.5rem;
  }

  .hero-center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .hero-center div {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero-logo {
    max-height: 17.5rem;
    max-width: 100%;
    z-index: 1;
    filter: drop-shadow(black 0 0 3rem);
  }

  .hero-slogan {
    font-size: 3.6rem;
    color: #d7ba9c;
    font-weight: 400;
    letter-spacing: 0.7rem;
    text-shadow: black 0 0 1rem;
    z-index: 1;
    white-space: nowrap;
  }

  .hero-services-cta:link,
  .hero-services-cta:visited {
    text-decoration: none;
    font-size: 3.6rem;
    color: #d7ba9c;
    font-weight: 400;
    letter-spacing: 0.7rem;
    text-shadow: black 0 0 1rem;
    position: absolute;
    top: 90%;
    left: 50.5%;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: all 0.3s ease;
  }

  .hero-down-arrow {
    background-image: url(../img/down-arrow.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 6rem;
    height: 6rem;
    position: absolute;
    top: 130%;
    left: 50.2%;
    transform: translate(-50%, -50%);
    z-index: 2;
    filter: drop-shadow(black 0 0 1rem);
  }

  .hero-services-cta:hover {
    cursor: pointer;
    color: #e6892b;
    transform: translate(-50%, -50%) scale(1.1);
    text-shadow: rgba(230, 137, 43, 0.9) 0 0 2rem;
  }

  .hero-services-cta:active {
    transform: translate(-50%, -50%) scale(1.05);
    text-shadow: rgba(230, 137, 43, 0.9) 0 0 2rem;
  }

  @media screen and (max-width: 25em) {
    .hero-slogan {
      font-size: 2.9rem;
    }
  }
</style>
