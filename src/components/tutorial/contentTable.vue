<template>
  <div class="hello">
    <img src="../../assets/logo.png">
    <h2>Tutorial Links</h2>
    <ul>
      <li>
        <a
          href="/tutorial"
          target="_blank"
        >
          Tutorial page
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
