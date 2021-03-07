<template>
  <article
    class="partenaire"
  >
    <div class="partenaire__cover">
      <g-image :alt="partenaire.title" :src="partenaire.image_featured" />
    </div>
    <div class="partenaire__content">
      <h2 class="partenaire__title">{{ partenaire.title }}</h2>
      <p>{{ partenaire.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    partenaire: {
      type: Object,
      required: true,
    },
  },
};
</script>
