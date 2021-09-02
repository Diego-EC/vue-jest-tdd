<template>
<!-- TODO: esta card tiene que ser plantilla tanto para Item Card como para Advertising Card -->
<div class="">
	<b-card class="my-2 standard-card dynamic-size" img-src="https://placekitten.com/480/480" img-alt="Image" img-top>
        <!--<b-row cols="2">
            <b-col class="standard-card-col" cols="10">
                <p class="text-left standard-card-price">{{ price }} €</p>
            </b-col>
            <b-col class="standard-card-col" cols="2">
                <b-button class="item__button standard-card-button" size="xs" variant="outline-light" v-on:click="like">
                    <b-icon icon="BIconHeart" variant="secondary"></b-icon>
                </b-button>
            </b-col>
        </b-row>-->
        <b-card-text class="standard-card-name mt-2">
            advertising card
        </b-card-text>
	</b-card>
</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        name: String,
        description: String,
        price: Number,
    },
    components: {
    },
    methods: {
        like() {
            console.log('like');
        }
    }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/settings";
@import "src/assets/styles/objects";
@import "src/assets/styles/components";

</style>