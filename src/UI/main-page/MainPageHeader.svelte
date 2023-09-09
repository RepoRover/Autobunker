<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const goToContactsPage = () => {
    dispatch("go-to-contacts");
  };
</script>

<div class="inner-header">
  <div class="grid-box">
    <button
      class="hero-contacts"
      on:click={goToContactsPage}
      in:fly={{ y: 50, delay: 500, duration: 500 }}>Yhteystiedot</button
    >
  </div>
</div>

<style>
  .inner-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    min-width: 100%;
  }

  .grid-box {
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
    max-width: 140rem;
  }

  .hero-contacts {
    font-family: "Oswald", sans-serif;
    background-color: transparent;
    border: none;
    margin-top: 7rem;
    margin-right: 5rem;
    font-size: 2.8rem;
    text-decoration: none;
    color: #d7ba9c;
    font-weight: 400;
    letter-spacing: 2px;
    text-shadow: black 0 0 1rem;
    z-index: 1;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .hero-contacts:hover {
    color: #e6892b;
    cursor: pointer;
    transform: scale(1.1);
    text-shadow: rgba(230, 137, 43, 0.9) 0 0 2rem;
  }

  .hero-contacts:active {
    transform: scale(1.05);
    text-shadow: rgba(230, 137, 43, 0.9) 0 0 2rem;
  }

  @media screen and (max-width: 25em) {
    .hero-contacts {
      margin-right: 3rem;
      margin-top: 6rem;
    }
  }
</style>
