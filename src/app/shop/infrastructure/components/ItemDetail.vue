<template>
    <div>
        <b-card>
            <h1>Item Detail</h1>
            <article>{{id}}</article>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "ItemDetail",
    props: {
    },
    created() {
        console.log('created ' + this.id)
        // TODO: get item by id: https://youtu.be/KGFcgnCSS6A?t=338
        // this.item = lo que nos devuelva el paso anterior
    },
    data() {
        return {
            id: this.$route.params.id,
            item: {},
        }
    }
}
</script>