<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-on:mouseover="goToAboutPage" 
        style="color: red; font-size: 50px; background: gray; max-width: 500px; margin: 0 auto">
        Hover to see the About Page
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
      goToAboutPage(){ 
          this.$router.push({path: '/About'});
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
