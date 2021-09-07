<template>
<div>
	<b-card class="my-2 standard-card dynamic-size" no-body>
        <!--<b-card-img v-on:click="ItemDetail" src="https://placekitten.com/480/480" alt="Image" img-top></b-card-img>-->
        <!--<b-card-img v-on:click="$router.push('item-detail')" src="https://placekitten.com/480/480" alt="Image" img-top></b-card-img>-->
        <b-card-img src="https://placekitten.com/480/480" alt="Image" img-top></b-card-img>
        <b-row class="standard-card-row" cols="2" align-v="center" align-h="between">
            <b-col class="standard-card-col" cols="8">
                <span class="text-left standard-card-price">{{ item.price }} €</span>
            </b-col>
            <b-col class="standard-card-col" cols="4" text-end>
                <b-button class="item__button standard-card-button" size="xs" variant="outline-light" v-on:click="like">
                    <b-icon icon="BIconHeart" variant="secondary"></b-icon>
                </b-button>
            </b-col>
        </b-row>
        <b-card-text class="standard-card-name">
            {{ item.name }}
        </b-card-text>  
        <p>
            <router-link to="/item-detail/123">/item-detail/123</router-link>
        </p>
	</b-card>
</div>
</template>

<script>
export default {
    name: "Item",
    props: {
        item: Object,
    },
    components: {
    },
    methods: {
        like() {
            console.log('like');
            // https://stackoverflow.com/questions/45638239/enclosing-a-router-link-tag-in-a-button-in-vuejs
            //console.log(this.item);
            console.log(this.item.name);
            this.$router.push('item-detail/12345');
        },
        itemDetail() {
            //v-on:click="ItemDetail"
            console.log('itemDetail');
            //this.$router.push('item-detail');
            //console.log(this.props.item);
            //this.$router.push({name: 'item-detail', params: {item: this.props.item},});
        },
    },
    data() {
        return {
            //dataName: String = "foo",
        }
    },
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/settings";
@import "src/assets/styles/objects";
@import "src/assets/styles/components";
</style>