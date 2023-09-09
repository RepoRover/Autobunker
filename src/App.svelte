<script>
  import MainPage from "./pages/MainPage.svelte";
  import ContactsPage from "./pages/ContactsPage.svelte";

  let page = "main";

  const goToMainPage = () => {
    page = "main";
  };

  const goToContactsPage = () => {
    page = "contacts";
  };
</script>

{#if page === "main"}
  <MainPage on:go-to-contacts={goToContactsPage} />
{:else}
  <ContactsPage on:go-to-main={goToMainPage} />
{/if}
