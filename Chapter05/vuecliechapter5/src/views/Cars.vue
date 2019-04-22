<template>
  <div class="home">
    <HelloCars msg="Welcome to Your Cars" />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloCars from "@/components/HelloCars.vue";

export default {
  name: "cars",
  components: {
    HelloCars
  }
};
</script>
