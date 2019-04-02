<template>
    <p>
        This is another component.
        <button v-on:click="alertTime">What's the time?</button>
    </p>
</template>

<script>
    export default {
        name: "AnotherComponent",
        data() {
            return {

            }
        },
        methods: {
            alertTime: () => {
                alert(new Date());
                alert('whatever');
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>