<template>
  <Layout>
    <header class="content__header">
      <h1>Actualités</h1>
      <p class="lead">Retrouvez nos dernières actualités, nos conseils et focus électroménagers.</p>
    </header>

    <section v-if="posts" class="blog">
      <h2 class="screen-reader-text">Les derniers articles</h2>  
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </section>

  </Layout>
</template>

<page-query>
query Posts {
  allBlogPost(sortBy: "date", order: DESC){
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