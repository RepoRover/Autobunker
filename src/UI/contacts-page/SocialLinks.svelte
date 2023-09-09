<script>
  import { fly } from "svelte/transition";
</script>

<div class="contacts-social-links">
  <p class="contacts-heading" in:fly={{ y: 50, delay: 600, duration: 500 }}>
    Yhteystiedot
  </p>
  <div class="line" in:fly={{ y: 50, delay: 650, duration: 500 }} />
  <a
    href="https://www.instagram.com/autobunker.fi"
    target="_blank"
    class="social-contact-link instagram"
    in:fly={{ y: 50, delay: 700, duration: 500 }}>Instagram</a
  >
  <a
    href="https://wa.me/+358465256617"
    target="_blank"
    class="social-contact-link whatsapp"
    in:fly={{ y: 50, delay: 750, duration: 500 }}>WhatsApp</a
  >
  <a
    href="mailto:Autobunkerfi@gmail.com"
    target="_blank"
    class="social-contact-link email"
    in:fly={{ y: 50, delay: 800, duration: 500 }}>Email</a
  >
  <a
    href="tel:+358465256617"
    target="_blank"
    class="social-contact-link phone"
    in:fly={{ y: 50, delay: 850, duration: 500 }}>Puhelin</a
  >
</div>

<style>
  .contacts-social-links {
    margin: 0 auto;
    margin-top: 20rem;
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    text-align: center;
    align-items: center;
    row-gap: 1.7rem;
  }

  .contacts-heading {
    display: inline-block;
    margin-bottom: 2.5rem;
    font-size: 4rem;
    color: #e6892b;
    letter-spacing: 2px;
    font-weight: 500;
  }

  .line {
    height: 1px;
    background-color: #d7ba9c;
    width: 6rem;
    margin-bottom: 2.5rem;
    border-radius: 1px;
  }

  .social-contact-link {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
    width: 35rem;
    padding: 1.2rem 0;
    border-radius: 200px;
    transition: all 0.3s;
    letter-spacing: 1px;
    color: #000;
    font-weight: 300;
  }

  .instagram:link,
  .instagram:visited {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }

  .social-contact-link:hover {
    transform: scale(1.05);
  }

  .social-contact-link:active {
    transform: scale(1.02);
  }

  .whatsapp {
    background-color: #25d366;
  }

  .email {
    background-color: #3899d5;
  }

  .phone {
    background-color: #09c14c;
  }

  @media (max-width: 40em) {
    .contacts-social-links {
      margin-top: 18rem;
      row-gap: 1.5rem;
    }
  }

  @media (max-width: 25em) {
    .social-contact-link {
      width: 30rem;
    }
  }
</style>
