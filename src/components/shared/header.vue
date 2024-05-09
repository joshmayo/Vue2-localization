<template>
  <div class="nav">
    <div class="nav__start">
      <router-link to="/"><img alt="Vue logo" src="../../assets/logo.png" /></router-link>
      <router-link to="/content">{{ $t("nav.links.content") }}</router-link>
      <router-link to="/tutorial">{{ $t("nav.links.tutorial") }}</router-link>
    </div>
    <div class="nav__middle">
      <h1>{{ heading }}</h1>
    </div>
    <div class="nav__end">
      <!-- Notice that we've included regular HTML, namely our <br />, within the opening and closing
        tags of the <i18n> component. We could place any HTML we like here, and Vue I18n will inject
        it where the {0} placeholder is in our message. -->
      <i18n path="greetingPlaceholder" tag="span"><span>Josh</span></i18n>
      <!-- This will pass an object to fill named placeholders in the string -->
      <span>{{ $t("greeting", { name: 'Josh' }) }}</span>
      <LocaleSwitcher />
    </div>
  </div>
</template>
<script>
import LocaleSwitcher from './localeSwitcher';

export default {
  components: { LocaleSwitcher },
  name: 'AppHeader',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #fff;
  background-color: #3d536a;
}
.nav__start,
.nav__middle
.nav__end {
  display: flex;
  align-items: center;
}
.nav__middle {
  flex-grow: 1;
  text-align: center;
}
.nav h1 {
  display: inline-block;
  margin: unset;
}
.nav img {
  margin-right: 1rem;
  padding: 5px;
  max-height: 35px;

  background-color: white;
  border-radius: 50%;
}
.nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>


<!-- <template>
    <header>
      <h1>{{ heading }}</h1>
      <p>(header)</p>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script> -->
