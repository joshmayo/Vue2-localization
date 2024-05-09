<template>
    <div class="site-container">
      <app-header :heading="$t('nav.headings.contentPage')"></app-header>
      <div class="app-content"><app-content></app-content></div>
      <app-footer></app-footer>
    </div>
  </template>

<script>
import AppHeader from '../shared/header';
import AppFooter from '../shared/footer';
import AppContent from '../tutorial/contentTable';

// components imported as an array need to use kebab case and explicit closing tags as above
// components imported as an object with attribute names can be used as defined and self close
// see below
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'app-content': AppContent,
  },
  // components: [AppHeader, AppFooter, AppContent],
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
.app-content {
  flex-grow: 1;
}
</style>
