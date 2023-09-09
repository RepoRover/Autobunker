<script>
  export let subServices;
  export let title;
  export let frontImage;
  export let backImage;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" onclick="cardRotate(this)">
  <!-- NOTE: attention to style tag!!! Image of the service is set as a background image, example: style="background-image: url(./img/front/card_1.webp)" -->
  <div
    class="card__side card__side--front"
    style="background-image: url({frontImage})"
  >
    <span class="service-name">{title}</span>
    <div class="card__cta">
      <div class="btn-flip">
        <ion-icon name="sync-outline" class="flip-icon" />
      </div>
    </div>
  </div>
  <!-- NOTE: attention to style tag!!! Image of the service is set as a background image, example: style="background-image: url(./img/back/card_1.webp)" -->
  <div
    class="card__side card__side--back"
    style="background-image: url({backImage})"
  >
    <ul class="subservices-list">
      {#each subServices as subService}
        <li>{subService}</li>
      {/each}
    </ul>
    <div class="card__cta">
      <div class="btn-flip">
        <ion-icon name="sync-outline" class="flip-icon" />
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    cursor: pointer;
    -webkit-perspective: 150rem;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52.5rem;
    width: 30rem;
  }

  .service-name {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 400;
    letter-spacing: 4px;
    color: #e6892b;
    text-shadow: 0 0 1rem #000;
  }

  .card__cta {
    width: 100%;
    display: grid;
    justify-content: center;
  }

  .btn-flip {
    transition: all 0.4s;
    height: 8rem;
    width: 8rem;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 4rem rgba(230, 137, 43, 0.9);
    border-radius: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .flip-icon {
    height: 5rem;
    width: 5rem;
    color: #e6892b;
    transition: all 0.4s;
  }

  .subservices-list {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 4px;
    color: #d7ba9c;
    display: grid;
    row-gap: 0.8rem;
  }
</style>
