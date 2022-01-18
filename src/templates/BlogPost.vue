<template>
  <Layout>
    <article class="entry post">
      <header class="entry__header">
        <h1 class="entry__title">{{ post.title}}</h1>
        <p v-if="post.excerpt" class="entry__excerpt lead">
          {{ post.excerpt}}
        </p>
      </header>
    </article>

    <section class="entry__content" v-html="post.content" />

    <footer class="entry__footer">
      <g-link to="/actualites" class="button button-secondary">
        ← Revenir aux articles
      </g-link>
    </footer>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: blogPost (id: $id) {
    title
    content
    subtitle
    image_cover
  }
}
</page-query>

<script>
export default {
  computed: {
    post() {
      return this.$page.post;
    },
  },
};
</script>