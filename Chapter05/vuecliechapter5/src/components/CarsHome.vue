<template>
  <div class="home">
    <div class="home">
        This is Cars home
        <ul>
            <li><router-link to="/cars/cars-new">See new cars</router-link></li>
            <li><router-link to="/cars/cars-used">See old cars</router-link></li>
        </ul>
    </div>
  </div>
</template>

<style>
ul li { list-style-type: none }
</style>