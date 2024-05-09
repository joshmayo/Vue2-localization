<template>
    <div class="app-content">
      <h2 v-on:click="changeLocalContent">{{ localContent }}</h2>
      <p>{{ this.$store.state.count }}</p>
      <button class="state-btn" v-on:click="changeLocalContent">Update local state</button><br/>
      <button class="state-btn" v-on:click="changeContent">Emit call to update elevated state</button><br/>
      <button class="state-btn" v-on:click="updateVuexStore">increment vuex store state</button>
      <button class="state-btn" v-on:click="updateVuexStore2">decrement vuex store state</button>

      <p>{{ $t("message") }}</p>
    </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      localContent: 'here be local component state',
      toggle: true,
    };
  },
  methods: {
    changeLocalContent() {
      this.localContent = 'here be new local component state';
    },
    changeContent() {
      this.$emit('changeContent', 'new content');
    },
    updateVuexStore() {
      // increment is store mutation name
      this.$store.commit('increment', '<func params go here>');
    },
    updateVuexStore2() {
      // decrement is store mutation name
      this.$store.commit('decrement', '<func params go here>');
    },
  },
};
</script>

<style>
.app-content {
  flex-grow: 1;
}
.state-btn {
  margin-bottom: 10px;
}
</style>
