<template>
    <div>
        <b-card>
            <h1>Item Detail</h1>
            <h3>foo</h3>

        </b-card>
    </div>
</template>

<script>
export default {
    name: "ItemDetail",
    props: {
        item: Object,
        //id: props.route.params.id,
    },
    created() {
        //this.gig = await this.retrieveAGig(this.jotaRouter.getParam('id'))
        console.log('created')
        //const id = this.$router.params.id;
        //console.log(this.$router.getParam('id'));
        console.log(this.$router.params.id);
        //console.log(id)
    },
    data() {
        return {
            id: this.$router.params.id,
            item: {},
        }
    }
}
</script>