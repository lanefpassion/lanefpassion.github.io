<template>
  <Layout>
    <header class="content__header">
      <h1>Nos cuisines</h1>
      <blockquote>
        “L’essence d’un projet, c’est l’harmonie parfaite entre l’esthétique,
        l’utile et le juste”
        <cite>- Frank Lloyd Wright -</cite>
      </blockquote>
    </header>

    <section class="cuisines alignfull">
      <CuisineCard
        v-for="cuisine in cuisines"
        :key="cuisine.id"
        :cuisine="cuisine"
      />
    </section>
  </Layout>
</template>

<page-query>
query Cuisines {
  allCuisinePost{
    edges {
      node {
        id
        title
        path
        subtitle
        image_cover
      }
    }
  }
}
</page-query>

<script>
import CuisineCard from "~/components/CuisineCard";
export default {
  components: {
    CuisineCard,
  },
  computed: {
    cuisines() {
      return this.$page.allCuisinePost.edges.map((edge) => edge.node);
    },
  },
  metaInfo: {
    title: "Nos Cuisines",
  },
};
</script>

<style scoped>
.cuisines {
  display: grid;
  grid-gap: 2em;
}
@media (min-width: 40rem) {
  .cuisines {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 60rem) {
  .cuisines {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
