<template>
	<div>
        <b-container class="">
            <b-row class="mr-1" cols="2" cols-sm="2" cols-md="3" cols-lg="4">
                <Item name="foo bar" description="mario" :price=123456789 />
                <Item name="bar foo" description="luigi" :price=2 />
                <Item name="mario bross" description="bross" :price=3 />
                <Item name="luigi bross, luigi bross, luigi bross, luigi bross" description="bross" :price=4 />
                <Item name="foo lol" description="mario" :price=5 />
                <Item name="bar pep" description="luigi" :price=6 />
                <Item name="lol bar" description="bross" :price=7 />
                <Item name="pep foo" description="bross" :price=8 />
                <Item name="pep bar" description="Ffoo" :price=9 />
            </b-row>
        </b-container>        
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