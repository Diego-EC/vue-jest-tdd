<template>
    <div>
        <b-card>
            <h1>Item Detail</h1>
            <article>{{item.name}}</article>
            <p>description: {{item.description}}</p>
            <p>id: {{item.id}}</p>
            <p>price: {{item.price}} €</p>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "ItemDetail",
    props: {
    },
    created() {
        let item = this.$store.getters.itemById(this.id);
        this.item = item;
    },
    data() {
        return {
            id: this.$route.params.id,
            item: {},
        }
    }
}
</script>