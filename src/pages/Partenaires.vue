<template>
  <Layout>
    <header class="content__header">
      <h1>Nos partenaires</h1>
      <p class="lead">
        Nous sélectionnons pour vous des marques haut de gamme en électroménager
        et ustensiles culinaires. Venez les retrouver en boutique !
      </p>
    </header>

    <section class="partenaires alignfull">
      <PartenaireCard v-for="partenaire in partenaires" :key="partenaire.id" :partenaire="partenaire" />
    </section>

  </Layout>
</template>

<page-query>
query Partenaires {
  allPartenairePost {
    edges {
      node {
        id
        title
        description
        image_featured
        url
      }
    }
  }
}
</page-query>

<script>
import PartenaireCard from '~/components/PartenaireCard'
export default {
  components: {
    PartenaireCard
  },
  computed: {
    partenaires() {
      return this.$page.allPartenairePost.edges.map( edge => edge.node)
    }
  },
  metaInfo: {
    title: 'Nos partenaires'
  }
}
</script>

<style>
.partenaire {
  display: grid;
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: var(--dark-color);
  color: var(--light-color);
}

.partenaire__title {
  margin-top: 0;
}

.partenaire__content {
  padding: 2em 2.5em;
  align-self: center;
}

.partenaire:nth-child(odd){
  background-color: var(--medium-color);
  color: var(--dark-color);
}

@media (min-width: 80rem) {
  .partenaire {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
