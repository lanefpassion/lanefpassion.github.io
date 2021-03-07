<template>
  <nav class="header__nav" :class="toggleMenuStatus()" aria-label="Navigation principal">
    <button
      class="menu-toggle"
      :class="toggleMenuStatus()"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggleMenu"
    >
      <span v-if="isToggleMenu">Fermer</span>
      <span v-else>Menu</span>
    </button>
    <ul class="menu">
      <li class="menu__item">
        <g-link class="menu__link" to="/cuisines">Nos cuisines</g-link>
      </li>
      <li class="menu__item">
        <g-link class="menu__link" to="/partenaires/">Nos partenaire</g-link>
      </li>
      <li class="menu__item">
        <g-link class="menu__link is-accent" to="/contact/">Rendez-vous</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      isToggleMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isToggleMenu = !this.isToggleMenu;
    },
    toggleMenuStatus() {
      return !this.isToggleMenu || "is-active";
      // return this.isToggleMenu ? 'is-active' : null
      // if (this.isToggleMenu ) return 'is-active'
    },
  },
};
</script>

<style scoped>
.menu {
  list-style: none;
  padding-left: 0;
}

.menu__link {
  display: block;
  padding: 1em;
  font-weight: bold;
}

.menu__link:hover,
.menu__link.active {
  background: var(--dark-color);
  color: var(--light-color);
  text-decoration: none;
}

.menu__link.is-accent:hover,
.menu__link.is-accent.active {
  background: var(--accent-color);
}

@media (max-width: 40rem) {
  .menu {
    position: absolute;
    z-index: 1000;
    display: block;
    top: 100%;
    left: 0;
    padding: 0 1em 2em;
    width: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 300ms ease;
    background: white;
  }
  .header__nav.is-active .menu {
    transform: scaleY(1);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 40rem) {
  .menu {
    display: flex;
    align-items: center;
  }
}

/** Menu toggle */

@media (min-width: 40rem) {
  .menu-toggle {
    display: none;
  }
}
</style>
