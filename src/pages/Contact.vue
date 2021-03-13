<template>
  <Layout>
    <header class="entry__header">
      <h1>Rendez-vous</h1>
      <p class="lead">Nous vous recevrons au showroom avec plaisir.</p>
    </header>

    <section class="entry__content">
      <p class="text-center">
        <strong>Du lundi au samedi de 9h30 à 12h30 et de 14h à 18h</strong>
      </p>

      <address class="has-medium-background-color text-center">
        <a
          href="https://goo.gl/maps/iFQSSxNjXYx2Zgpi9"
          target="_blank"
          rel="noopener noreferrer"
        >
          12 avenue Carnot<br />
          76250 Déville-lès-Rouen
        </a>
      </address>

      <p class="lead text-center">
        Pour plus d’informations, n’hésitez pas<br />
        à nous contacter pour prendre rendez-vous.
      </p>

      <p class="text-center">
        <a
          href="tel:0232102727"
          class="button button-accent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="appeler le :"
          >02 32 10 27 27</a
        >
        <a
          href="mailto:contact@lanefpassion.fr"
          class="button button-primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="nous écrire à : mailto:contact@lanefpassion.fr"
          >Écrivez-nous</a
        >
      </p>
    </section>

    <figure class="alignwide mt-4">
      <g-image src="/uploads/contact_bd.jpg" width="1440" />
    </figure>
  </Layout>
</template>


<style scoped>
address {
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 1em;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 0.25em;
}
</style>
