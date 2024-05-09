<template>
  <ul>
    <li v-for="(ninja, index) in ninjas" v-bind:key="index">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Tutorial',
  data() {
    return {
      ninjas: [
        'Yoshi',
        'Mario',
      ],
    };
  },
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
  </style>
