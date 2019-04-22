<template>
  <div id="app">
      <article>
        Our own custom article component!
      </article>
      <AnotherComponent />
  </div>
</template>

<script>
import AnotherComponent from './components/AnotherComponent.vue';

export default {
    name: 'app',
    components: {
        AnotherComponent
    }
}
</script>