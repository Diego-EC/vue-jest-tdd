<template>
   <div class="mx-3">
      <div class="item-detail__border">
         <b-img fluid-grow class="rounded item-detail__img" src="https://placekitten.com/480/480" alt="Image" />
         <p class="item-detail__p item-detail__price">{{ item.price }} €</p>
         <p class="item-detail__p item-detail__name">{{ item.name }}</p>
         <p class="item-detail__p item-detail__description">
            {{ item.description }}
         </p>
      </div>
   </div>
</template>

<script>
export default {
  name: "ItemDetail",
  props: {},
  created() {
    let item = this.$store.getters.itemById(this.id);
    this.item = item;
  },
  data() {
    return {
      id: this.$route.params.id,
      item: {},
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/settings";
.item-detail {
   &__border {      
      border: 1px solid $color-border-primary;
      border-radius: 5px;
      box-shadow:0.2rem 0.2rem 0.5rem $color-shadow-primary;
   }
   &__img {
      max-width: $item-detail__image--max-width;
   }
   &__p {
      text-align: left;
      margin-left: 2rem;
      margin-top: 1rem;
   }
   &__price {
      font-size: x-large;
   }
   &__name {
      font-size: x-large;
   }
   &__description {
      margin-bottom: 5rem;
   }   
}
</style>