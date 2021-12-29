<template>
  <article class="post-card">
    <div class="post-card__content">
      <h3 class="post-card__title">{{post.title}}</h3>
      <div class="post-card__excerpt">
        {{post.excerpt}}
      </div>
      <g-link :to="post.path" class="button button-secondary">Lire la suite</g-link>
    </div>
    <figure v-if="post.image_cover" class="post-card__thumbnail">
      <g-image :src="post.image_cover" />
    </figure>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true
    },
  },
};
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
}
.post-card__thumbnail {
  order: -1;
  margin: 0;
}

.post-card__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-card__content {
  align-self: center;
  padding: 2em 2.5em;
}
.post-card__title {
  margin-top: 0;
}

.post-card__excerpt {
  margin-bottom: 1em;
}

.button {
  margin-inline: 0;
}

@media (min-width: 40rem) {
  .post-card {
    margin-block: 4rem;
    flex-direction: row;
  }
  .post-card__content {
    flex-basis: auto;
  }
  .post-card__thumbnail {
    order: initial;
    flex: 0 0 33.333%;
  }
}
</style>