<template>
  <Layout>
    <article class="entry cuisine">
      <header class="entry__header">
        <h1 class="entry__title">{{ cuisine.title }}</h1>
        <p v-if="cuisine.excerpt" class="entry__excerpt lead">
          {{ cuisine.excerpt }}
        </p>
      </header>

      <section class="entry__content" v-html="cuisine.content" />

      <footer class="entry__footer">
        <g-link to="/cuisines" class="button button-secondary"
          >← Nos cuisines</g-link
        >
      </footer>
    </article>
  </Layout>
</template>

<page-query>
query Cuisine ($id: ID!) {
  post: cuisinePost (id: $id) {
    title
    content
    subtitle
    excerpt
    image_cover
  }
}
</page-query>

<script>
export default {
  computed: {
    cuisine() {
      return this.$page.post;
    },
  },
};
</script>

<style>
.cuisine h2 + p {
  font-size: 1.6em;
  font-family: var(--font-accent);
}
</style>
