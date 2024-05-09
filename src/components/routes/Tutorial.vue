<template>
  <div class="site-container">
    <app-header :heading="$t('nav.headings.tutorialPage')" />
    <app-content />
    <app-footer />
  </div>
</template>

<script>
import Header from '../shared/header';
import Footer from '../shared/footer';
import Content from '../tutorial/content';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content,
  },
  name: 'Tutorial',
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  a {
    color: #42b983;
  }
  .site-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  </style>
