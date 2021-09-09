<template>
<div>
	<b-card class="my-2 standard-card dynamic-size" no-body>
        <b-card-img @click="itemDetail" src="https://placekitten.com/480/480" alt="Image" img-top></b-card-img>
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
        },
        itemDetail() {
            this.$router.push('item-detail/' + this.item.id);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/settings";
@import "src/assets/styles/objects";
@import "src/assets/styles/components";
</style>