<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Footer from "../UI/Footer.svelte";
  import ContactsPageHeader from "../UI/contacts-page/ContactsPageHeader.svelte";
  import SocialLinks from "../UI/contacts-page/SocialLinks.svelte";
  import Map from "../UI/contacts-page/Map.svelte";

  const dispatch = createEventDispatcher();

  const goToMainPage = () => {
    dispatch("go-to-main");
  };
</script>

<main in:fade={{ delay: 300, duration: 300 }} out:fade={{ duration: 300 }}>
  <ContactsPageHeader on:go-to-main={goToMainPage} />
  <SocialLinks />
  <Map />
  <Footer />
</main>
