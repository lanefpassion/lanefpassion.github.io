<template>
  <div class="socials">
    <a 
      v-for="(social, index) in socials" 
      :key="index"
      class="social__link"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Retrouvez-nous sur Houzz"
      ><g-image
        class="social__icon"
        alt=""
        :src="iconSrc(social.name)"
    /></a>
  </div>
</template>

<static-query>
query {
  metadata {
    settings {
      informations {
        socials {
          url
          name
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Socials',
  methods: {
    iconSrc(name) {
      return require(`~/assets/images/${name.toLowerCase()}.svg`)
    }
  },
  computed: {
    socials() {
      return this.$static.metadata.settings.informations.socials
    } 
  }
}
</script>

<style>
/** Footer social */
.social__link {
  padding: 1em;
}
.social__icon {
  width: 30px;
}
</style>