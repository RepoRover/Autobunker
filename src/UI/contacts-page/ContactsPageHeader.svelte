<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const goToMainPage = () => {
    dispatch("go-to-main");
  };
</script>

<header class="header-box" in:fly={{ y: 50, delay: 500, duration: 500 }}>
  <div class="contacts_header">
    <div class="top-shadow" in:fly={{ y: -50, delay: 500, duration: 500 }} />
    <div class="contacts_logo--box">
      <button on:click={goToMainPage}>
        <img src="./img/logo_scaled.webp" alt="Autobunker logo" />
      </button>
    </div>
    <div class="contacts_link-to-main">
      <button class="main-page-link" on:click={goToMainPage}>Pääsivu</button>
    </div>
  </div>
</header>

<style>
  button {
    background-color: transparent;
    border: none;
    font-family: "Oswald", sans-serif;
    color: white;
    cursor: pointer;
  }

  .header-box {
    position: fixed;
    top: -1rem;
    left: 0;
    min-width: 100%;
    z-index: 9999;
  }

  .contacts_header {
    height: 20rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 140rem;
    padding: 0 5rem;
  }

  .top-shadow {
    position: absolute;
    top: 0;
    left: 50%;
    width: 75%;
    max-width: 140rem;
    height: 50px;
    transform: translate(-50%, -100%);
    box-shadow: 0 0 200px 30px #e6892b;
  }

  .contacts_logo--box button {
    height: 6rem;
  }

  button img {
    height: 100%;
  }

  .main-page-link {
    text-decoration: none;
    color: #d7ba9c;
    font-size: 2.8rem;
    transition: all 0.3s;
    letter-spacing: 2px;
  }

  .main-page-link:hover {
    color: #e6892b;
    text-shadow: rgba(230, 137, 43, 0.9) 0 0 2rem;
  }

  .contacts_link-to-main {
    transition: all 0.3s;
  }

  .contacts_link-to-main:hover {
    transform: scale(1.1);
  }

  .contacts_link-to-main:active {
    transform: scale(1.05);
  }

  @media (max-width: 25em) {
    .contacts_header {
      padding: 0 3rem;
      height: 18rem;
    }

    .contacts_logo--box {
      height: 5rem;
    }
  }
</style>
