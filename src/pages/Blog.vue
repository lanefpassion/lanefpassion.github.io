<template>
  <Layout>
    <header class="content__header">
      <h1>Blog</h1>
    </header>

    <section v-if="posts" class="blog">
      <h2 class="screen-reader-text">Les derniers articles</h2>  
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </section>

  </Layout>
</template>

<page-query>
query Posts {
  allBlogPost{
    edges {
      node {
        id
        title
        path
        subtitle
        excerpt
        image_cover
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard";
export default {
  components: {
    PostCard,
  },
  computed: {
    posts() {
      return this.$page.allBlogPost.edges.map( edge => edge.node);
    }
  }
}
</script>

<style scoped>
.blog {
  max-width: 1040px;
  margin-inline: auto;
}
</style>