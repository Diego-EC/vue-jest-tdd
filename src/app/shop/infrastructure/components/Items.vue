<template>
	<div>
		<Item name="foo" />
		<Item name="bar" />
		<Item name="lol" />
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