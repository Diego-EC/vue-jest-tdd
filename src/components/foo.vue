<template>
  <div>
    <h1>Tu mensaje es {{ foo }}</h1>
    <button v-on:click="lol">Add 1</button>
  </div>
</template>

<script>
export default {
  name: "foo",
  props: {
    msg: String,
  },
  methods: {
    lol() {
      console.log("lol");
    },
  },
};
</script>

<style scoped></style>
