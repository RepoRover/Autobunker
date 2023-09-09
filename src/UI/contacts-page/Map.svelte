<script>
  import { fly } from "svelte/transition";
</script>

<div class="map-section">
  <p class="contacts-heading" in:fly={{ y: 50, delay: 900, duration: 500 }}>
    Sijaintimme
  </p>
  <div class="line" in:fly={{ y: 50, delay: 950, duration: 500 }} />

  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119361.5934571798!2d25.301544892240393!3d64.87825101102138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681ccb00e538f83%3A0x12e0334ab33f4c6!2sTetril%C3%A4ntie%204b%2C%2090460%20Oulu%2C%20Finland!5e0!3m2!1sen!2sbr!4v1688923031594!5m2!1sen!2sbr&z=200000"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    in:fly={{ y: 50, delay: 1000, duration: 500 }}
  />
</div>

<style>
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

  .map-section {
    margin: 0 auto;
    margin-top: 10rem;
    max-width: 140rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 5rem;
    row-gap: 1.7rem;
  }

  iframe {
    width: 95%;
    height: 50rem;
    filter: invert(90%) hue-rotate(180deg) brightness(1.1) saturate(1.3);
  }
</style>
