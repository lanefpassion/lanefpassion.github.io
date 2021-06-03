<template>
  <div class="layout">
    <div v-if="notification.active" class="notification">
      {{notification.message}}
    </div>
    <header class="header" role="banner">
      <div class="header__inner">
        <div class="header-logo">
          <g-link to="/"><Logo /></g-link>
        </div>
        <Navigation />
      </div>
    </header>

    <main class="content" role="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer-logo">
          <Logo />
        </div>
        <!-- end footer-logo -->

        <div class="footer-contact">
          <p itemprop="street-address">
            <a
              href="https://goo.gl/maps/iFQSSxNjXYx2Zgpi9"
              target="_blank"
              rel="noopener noreferrer"
            >
              12 avenue Carnot<br />
              76250 Déville lès rouen
            </a>
          </p>
          <p><a href="tel:0232102727" aria-label="Appeler le 02 32 10 27 27">02 32 10 27 27</a></p>
          <p>
            <a :href="`mailto:${email}`"
              >{{email}}</a
            >
          </p>
        </div>
        <!-- end footer-contact -->

        <div class="footer-social">
          <a
            class="footer-social__link"
            href="https://www.facebook.com/lanefpassionrouen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Retrouvez-nous sur Facebook"
            ><g-image
              class="footer-social__icon"
              alt=""
              src="~/assets/images/facebook.svg"
              width="30"
          /></a>
          <a
            class="footer-social__link"
            href="https://www.instagram.com/lanefpassion/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Retrouvez-nous sur Instagram"
            ><g-image
              class="footer-social__icon"
              alt=""
              src="~/assets/images/instagram.svg"
              width="30"
          /></a>
          <a
            class="footer-social__link"
            href="https://www.pinterest.fr/LanefPassion/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Retrouvez-nous sur Pinterest"
            ><g-image
              class="footer-social__icon"
              alt=""
              src="~/assets/images/pinterest.svg"
              width="30"
          /></a>
          <a
            class="footer-social__link"
            href="https://www.houzz.fr/professionnels/cuisiniste-et-concepteur-de-cuisine/lanef-passion-sas-pfvwfr-pf~759163393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Retrouvez-nous sur Houzz"
            ><g-image
              class="footer-social__icon"
              alt=""
              src="~/assets/images/houzz.svg"
              width="30"
          /></a>
        </div>
        <!-- end footer-social -->

        <div class="footer-credits">
          {{ new Date().getFullYear() }}
          © Lanef Passion -
          <g-link to="/mentions-legales/">Mentions légales</g-link>
        </div>
        <!-- end footer-credit -->
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      informations {
        email
      }
      notification {
        message
        active
      }
    }
  }
}
</static-query>

<script>
import Logo from "~/components/Logo";
import Navigation from "~/components/Navigation";

export default {
  components: {
    Logo,
    Navigation,
  },
  computed: {
    email() {
      return this.$static.metadata.settings.informations.email
    },
    notification() {
      return this.$static.metadata.settings.notification
    }
  }
};
</script>

<style>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
  margin: 0 auto;
}

.header,
.content,
.footer {
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
}

.header,
.footer {
  padding-top: 2em;
  padding-bottom: 2em;
}

.content > * {
  margin-left: auto;
  margin-right: auto;
}

.header__inner,
.content,
.footer__inner {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1440px;
}

.header__inner,
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.menu-toggle {
  position: relative;
  z-index: 9000;
  padding: 1em 0 1em 1em;
  border: none;
  background-color: transparent;
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  flex-wrap: wrap;
}

.notification {
  padding: 2rem 5vw;
  background: var(--dark-color);
  color: var(--light-color);
  text-align: center;
  font-size: .8em;
}

/* Footer */
.footer {
  margin-top: 2rem;
  background-color: var(--dark-color);
  color: var(--medium-color);
  font-size: 0.8em;
}

.footer-logo,
.footer-contact,
.footer-social {
  margin-bottom: 2rem;
}

/** Footer contact */
.footer-contact {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-size: 0.8em;
}

/** Footer social */
.footer-social__link {
  padding: 1em;
}

/** Footer credits */
.footer-credits {
  margin-top: 2em;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  opacity: 0.5;
}

.content__header {
  text-align: center;
  max-width: 1040px;
  margin: auto;
}
</style>
