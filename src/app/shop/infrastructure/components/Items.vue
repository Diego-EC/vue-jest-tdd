<template>
	<div>
		<Item name="foo" description="mario" :price=1 />
		<Item name="bar" description="luigi" :price=2 />
		<Item name="lol" description="bross" :price=3 />
	</div>
</template>

<script>
import Item from "./Item.vue";
export default {
  	name: "Items",
  	components: {
    	Item,

  	},
};
</script>