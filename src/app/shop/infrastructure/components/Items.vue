<template>
	<div>
        <b-container class="">
            <b-row class="mr-1" cols="2" cols-sm="2" cols-md="3" cols-lg="4">
                <div v-for="(item, index) in $store.getters.items" :key="index"><Item :name=item.name :description=item.description :price=item.price /></div>
            </b-row>
        </b-container>
	</div>
</template>

<script>
//import Item from "./Item.vue";
import Item from "/src/app/shop/infrastructure/components/Item.vue";
import Card from "/src/app/shared/card/infrastructure/Card.vue";

export default {
  	name: "Items",
  	components: {
    	Item,
        Card,
  	},
    data() {
    return {
        array: ["HTML", "CSS", "Javascript", "Terminal"],
    };
  },
};
</script>