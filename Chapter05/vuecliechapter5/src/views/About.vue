<template>
  <div class="about">
    <h1>This is an about page. HMR rocks!</h1>
    <p v-on:mouseover="goToHomePageSlowly" class="go">Hover to see the Home Page</p>
  </div>
</template>
<script>
export default {
  name: "About",
  props: {
    msg: String
  },
  methods: {
      goToHomePage(){ 
        this.$router.push({path: '/'}) 
      },
      goToHomePageSlowly(){
        setTimeout(() => this.goToHomePage(), 1000);
      }
  }
};
</script>
<style>
.go {
  color: purple; 
  font-size: 50px; 
  cursor: pointer;
  max-width: 500px;
  margin: 0 auto;
  background: #fabdab;
}
</style>
