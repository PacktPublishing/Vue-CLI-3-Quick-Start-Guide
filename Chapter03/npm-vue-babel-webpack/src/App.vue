<template>
    <div id="entryPoint">
        <article>
            Our own custom article component!
        </article>
    <AnotherComponent />
</div>
</template>
<script>
    import AnotherComponent from './components/AnotherComponent.vue';
    
    export default {
        name: 'entryPoint',
        components: {
            AnotherComponent
        }
    }
</script>