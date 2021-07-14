<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <figure class="has-bottom-decoration">
      <g-image alt="Example image" src="/uploads/home-1.jpg" width="1440" height="100" fit="cover"/>
    </figure>

    <section class="home-section-1">
      <div class="section-content">
        <h2>
          Tout doit<br />
          être fait avec passion.
        </h2>
        <p class="lead">Cuisiner c'est délivrer une émotion</p>
        <p>
          Le partage, la convivialité, le bien-être en sont les maîtres-mots.
          Ainsi, nous réalisons nos cuisines sur mesure afin de vous offrir tous
          les avantages d'une cuisine professionnelle pensée et adaptée pour
          vous et votre cadre de vie.
        </p>
      </div>
      <div class="section-image">
        <img src="/uploads/home-2.jpg" alt="" />
      </div>
    </section>

    <figure class="has-top-decoration">
      <g-image alt="Example image" src="/uploads/home-3.jpg" />
    </figure>

    <section class="home-section-2">
      <div class="section-content">
        <h2>
          L’exception<br />
          est la règle.
        </h2>
      </div>
    </section>

    <section class="home-section-3">
      <div class="section-image">
        <img src="/uploads/home-4.jpg" alt="" />
      </div>
      <div class="section-content">
        <p class="lead">
          Le concept, une cuisine d’exception pensée pour des particuliers.
        </p>
        <p>
          Chaque nouveau projet commence par une feuille blanche : votre
          habitation, vos goûts, vos envies, votre style de vie. Tous ces
          éléments sont pris en compte afin de concevoir une cuisine pour
          l'espace dédié et les personnes qui l'utiliseront. L'ensemble du
          mobilier est dessiné avec précision afin que les usages soient
          optimisés et agréables.
        </p>
        <p>Chaque cuisine est unique, comme vous.</p>
        <g-link class="button" to="/cuisines/" style="margin-top: 2em;">Découvrez nos cuisines</g-link>
      </div>
    </section>

    <section class="home-section-4">
      <h2>L’amour du savoir-faire</h2>
      <p class="lead">
        Le prestige et la crédibilité de Lanef Passion reposent sur notre
        gestion complète de votre projet.
      </p>

      <g-image alt="Example image" src="/uploads/home-5.jpg" />

      <p>
        De la conception à la réception de chantier, nous souhaitons que la
        création de votre cuisine soit une expérience agréable. Notre histoire a
        commencé avec les cuisines professionnelles : plusieurs décennies
        d'expérience nous ont apporté le souci de l'implantation et de
        l'ergonomie, l'amour des matériaux nobles et le goût de l'innovation par
        le choix d'un électroménager haut de gamme pour une clientèle avertie et
        exigeante.
      </p>
    </section>

    <figure class="has-bottom-decoration">
      <g-image alt="Example image" src="/uploads/home-6.jpg" />
    </figure>

    <section class="home-section-5">
      <div class="section-image">
        <g-image alt="Example image" src="/uploads/home-7.jpg" />
      </div>

      <div class="section-content">
        <h2>La fabrication</h2>
        <p class="lead">
          Les détails font la perfection, et la perfection n’est pas un détail.
        </p>
        <p>
          Nous allions artisanat traditionnel et le meilleur de la technologie
          afin de vous offrir une cuisine d'exception. Les matériaux nobles se
          mélangent dans nos projets : inox, minéral et essences de bois. Nos
          artisans, implantés en Normandie, sont des passionnés avec lesquels
          nous travaillons depuis de nombreuses décennies.
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Tout doit être fait avec passion.',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.home-section-1,
.home-section-2,
.home-section-3,
.home-section-4,
.home-section-5 {
  max-width: 960px;
  margin: 2em auto;
}
@media (min-width: 40rem) {
  .home-section-1 {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    margin-top: 200px;
    margin-bottom: 200px;
  }
  .home-section-1 .section-image {
    grid-column: 1/2;
    grid-row: 1;
    z-index: -1;
  }

  .home-section-1 .section-content {
    grid-column: 3/4;
  }
  .home-section-1 h2 {
    margin-top: -100px;
    margin-left: -150px;
    max-width: 500px;
  }

  .home-section-2,
  .home-section-3,
  .home-section-4,
  .home-section-5 {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
  }

  /** Section 2 */
  .home-section-2 .section-content,
  .home-section-3 .section-content,
  .home-section-5 .section-content {
    grid-column: 3/4;
  }

  .home-section-2 h2 {
    margin-top: -90px;
    margin-left: -150px;
    max-width: 500px;
  }

  .home-section-3 .section-image {
    position: relative;
  }
  .home-section-3 .section-image::before {
    content: '';
    display: block;
    width: 100%;
    height: 400px;
    background: black;
    position: absolute;
    left: -100px;
    z-index: -1;
  }
  .home-section-3 .section-image img {
    margin-top: 100px;
  }

  .home-section-4 {
    position: relative;
    margin-bottom: 100px;
  }

  .home-section-4 {
    grid-template-columns: 1fr 100px 2fr;
  }

  .home-section-4::before {
    content: "";
    display: block;
    width: 400px;
    height: 70%;
    position: absolute;
    z-index: -1;
    top: 20%;
    left: -100px;
    background: var(--dark-color);

  }
  .home-section-4 h2,
  .home-section-4 p {
    grid-column: 3 / 4;
  }
  .home-section-4 img {
    grid-column: 1 / 4;
    margin-left: 100px;
    margin-top: 36px;
    margin-bottom: 50px;
  }

  .home-section-5 {
    margin-top: 100px;
  }
}
</style>
