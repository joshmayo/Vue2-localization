<template>
    <footer>
      <div>Copyright test site (footer)</div>
      <LocaleSwitcher />
    </footer>
</template>

<script>
import LocaleSwitcher from './localeSwitcher';

export default {
  name: 'AppFooter',
  components: {
    LocaleSwitcher,
  },
  data() {
    return {};
  },
};
</script>
