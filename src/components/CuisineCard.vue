<template>
  <article
    class="cuisine-card"
    :style="`background-image: url(${cuisine.image_cover.src});`"
  >
    <g-link :to="cuisine.path" class="cuisine-card__content">
      <div class="cuisine-card__title display-3">{{ cuisine.title }}</div>
      <div v-if="cuisine.subtitle" class="cuisine-card__subtitle">
        {{ cuisine.subtitle }}
      </div>
    </g-link>
  </article>
</template>

<script>
export default {
  props: {
    cuisine: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cuisine-card {
  position: relative;
  min-height: 600px;
  background-color: var(--medium-color);
  background-size: cover;
  background-position: center;
  color: var(--light-color);
}
.cuisine-card__content {
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  transform: scale(0.8);
  transition: all 300ms ease;
  text-decoration: none;
  text-align: center;
}
.cuisine-card__content:hover {
  opacity: 1;
  transform: scale(1);
}

.cuisine-card__title,
.cuisine-card__subtitle {
  margin: 0;
}
.cuisine-card__subtitle::before {
  content: "";
  display: block;
  margin: 1em auto;
  width: 80px;
  height: 2px;
  background: var(--light-color);
}
</style>
