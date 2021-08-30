<template>
    <div>
        <p>this is the item {{name}}</p>
    </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>

</style>