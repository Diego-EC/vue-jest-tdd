<template>
	<div class="">
		<b-card class="my-2 item__card dynamic-size" img-src="https://placekitten.com/480/480" img-alt="Image" img-top>
            <b-row cols="2">
                <b-col class="item__card-col" cols="10">
                    <p class="text-left item__card-price">{{ price }} €</p>
                </b-col>
                <b-col class="item__card-col" cols="2">
                    <b-button class="item__button" size="xs" variant="outline-light" v-on:click="like">
                        <b-icon icon="BIconHeart" variant="secondary"></b-icon>
                    </b-button>
                </b-col>
            </b-row>
            <b-card-text class="item__card-name mt-2">
                {{ name }}
            </b-card-text>
		</b-card>
   	</div>
</template>

<script>

export default {
    name: "Item",
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
    .item {
        &__card {
            margin-left: 1rem;
            &-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        &__card-col {
            padding: 0;
        }
        &__card-price {
            max-lines: 1;
            word-wrap: normal;
            font-weight: bold;
            margin: 0 0 0 0.3rem;
        }
        &__button {
            padding: 0;
            background-color: alpha($color: #000000);
            border-color: white;
            &:active {
                background-color: alpha($color: #000000) !important;
                border-color: white !important;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .dynamic-size{
            height:16rem;
        } 
    }
    @media only screen and (min-width: 600px) {
        .dynamic-size{
            height:22rem;
        } 
    } 
    @media only screen and (min-width: 768px) {
        .dynamic-size{
            height:22rem;
        } 
    } 
    @media only screen and (min-width: 992px) {
        .dynamic-size{
            height:22rem;
        } 
    } 
    @media only screen and (min-width: 1200px) {
        .dynamic-size{
            height:24rem;
        } 
    }
</style>