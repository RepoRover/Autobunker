<script>
  import { fly } from "svelte/transition";
</script>

<div class="footer" in:fly={{ y: 50, delay: 1050, duration: 500 }}>
  <div class="footer_small-grid-box">
    <a href="https://www.instagram.com/autobunker.fi" target="_blank"
      ><ion-icon name="logo-instagram" class="logo-footer" />
    </a>
  </div>
  <div class="footer_small-grid-box">
    <a href="tel:+358465256617" target="_blank">
      <ion-icon name="call" class="logo-footer" />
    </a>
  </div>
  <div class="footer_small-grid-box">
    <a href="mailto:Autobunkerfi@gmail.com" target="_blank">
      <ion-icon name="mail" class="logo-footer" />
    </a>
  </div>
  <div class="footer_big-grid-box">
    <div class="copyright-box">
      <span class="footer_copyright">Copyright ©</span>
      <img
        class="footer_rulers-logo"
        src="./img/rulers-logo.png"
        alt="rulers-logo"
      />
    </div>
  </div>
</div>

<style>
  .footer {
    margin: 0 auto;
    margin-top: 10rem;
    max-width: 140rem;
    margin-bottom: 5rem;
    padding: 0 5rem;
    display: grid;
    grid-template-columns: repeat(3, 0.25fr) 3fr;
    grid-column-gap: 3rem;
    grid-row-gap: 0px;
  }

  .footer_small-grid-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer_big-grid-box {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .copyright-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-footer {
    height: 3.5rem;
    width: 3.5rem;
    color: #d7ba9c;
    transition: all 0.3s ease;
  }

  .logo-footer:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #e6892b;
  }

  .logo-footer:active {
    cursor: pointer;
    transform: scale(1.05);
    color: #e6892b;
  }

  .footer_copyright {
    display: inline-block;
    font-size: 1.5rem;
    color: #e6892b;
  }

  .footer_rulers-logo {
    height: 3.5rem;
    color: #d7ba9c;
  }

  @media screen and (max-width: 25em) {
    .footer {
      padding: 0 2.5rem;
    }
  }
</style>
