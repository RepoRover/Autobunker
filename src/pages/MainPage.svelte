<script>
  import { fade, fly } from "svelte/transition";

  import Footer from "../UI/Footer.svelte";
  import ServiceCard from "../UI/main-page/ServiceCard.svelte";
  import Hero from "../UI/main-page/Hero.svelte";
  import MainPageHeader from "../UI/main-page/MainPageHeader.svelte";
  import services from "../services-store";
</script>

<main in:fade={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <MainPageHeader on:go-to-contacts />
  <Hero />
  <section
    class="services"
    id="services"
    in:fly={{ y: 50, delay: 800, duration: 500 }}
  >
    {#each $services as service}
      <ServiceCard
        title={service.title}
        subServices={service.subServices}
        frontImage={service.frontImage}
        backImage={service.backImage}
      />
    {/each}
  </section>
  <Footer />
</main>

<style>
  .services {
    margin: 0 auto;
    margin-top: 10rem;
    max-width: 140rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8rem;
    grid-column-gap: 2.5rem;
    justify-items: center;
    padding: 0 2rem;
  }

  @media screen and (max-width: 62em) {
    .services {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 37.5em) {
    .services {
      grid-template-columns: 1fr;
    }
  }
</style>
